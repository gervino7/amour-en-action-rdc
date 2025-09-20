-- Remove the overly permissive public read policy
DROP POLICY IF EXISTS "Donations are publicly viewable for statistics" ON public.donations;

-- Create a secure view for public donation statistics that only exposes aggregated data
CREATE OR REPLACE VIEW public.donation_statistics AS
SELECT 
  COUNT(*) as total_donations,
  SUM(amount) as total_amount,
  AVG(amount) as average_donation,
  COUNT(CASE WHEN status = 'completed' THEN 1 END) as completed_donations,
  SUM(CASE WHEN status = 'completed' THEN amount ELSE 0 END) as total_completed_amount,
  DATE_TRUNC('month', created_at) as month,
  COUNT(*) as monthly_count
FROM public.donations 
WHERE status = 'completed'
GROUP BY DATE_TRUNC('month', created_at)
UNION ALL
SELECT 
  (SELECT COUNT(*) FROM public.donations WHERE status = 'completed') as total_donations,
  (SELECT SUM(amount) FROM public.donations WHERE status = 'completed') as total_amount,
  (SELECT AVG(amount) FROM public.donations WHERE status = 'completed') as average_donation,
  (SELECT COUNT(*) FROM public.donations WHERE status = 'completed') as completed_donations,
  (SELECT SUM(amount) FROM public.donations WHERE status = 'completed') as total_completed_amount,
  NULL as month,
  NULL as monthly_count
LIMIT 1;

-- Enable RLS on the statistics view
ALTER VIEW public.donation_statistics SET (security_invoker = on);

-- Create policy to allow public read access to the statistics view only
CREATE POLICY "Public can view donation statistics" 
ON public.donation_statistics 
FOR SELECT 
USING (true);

-- Create a more restrictive policy for donations table - only allow system operations
-- Users can still create donations (for the donation form)
-- But cannot read individual donation records

-- Keep the insert policy for donation form functionality
-- (This policy already exists and is correct)

-- Add a policy that only allows the system/admin to read individual donations
-- For now, we'll completely restrict reading individual donations to prevent data exposure
-- Individual donations should only be accessible through backend functions if needed

-- Create trigger to automatically update the statistics when donations change
CREATE OR REPLACE FUNCTION public.refresh_donation_statistics()
RETURNS TRIGGER AS $$
BEGIN
  -- This function would refresh materialized views if we had them
  -- For now, the view is computed dynamically
  RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for automatic statistics updates
DROP TRIGGER IF EXISTS update_donation_statistics ON public.donations;
CREATE TRIGGER update_donation_statistics
  AFTER INSERT OR UPDATE OR DELETE ON public.donations
  FOR EACH ROW EXECUTE FUNCTION public.refresh_donation_statistics();