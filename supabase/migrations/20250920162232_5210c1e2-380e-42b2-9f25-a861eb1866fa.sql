-- Remove the overly permissive public read policy that exposes all donor data
DROP POLICY IF EXISTS "Donations are publicly viewable for statistics" ON public.donations;

-- Create a secure view for public donation statistics that only exposes aggregated data
CREATE OR REPLACE VIEW public.donation_statistics AS
SELECT 
  'total' as stat_type,
  COUNT(*) as total_donations,
  COALESCE(SUM(amount), 0) as total_amount,
  COALESCE(AVG(amount), 0) as average_donation,
  COUNT(CASE WHEN status = 'completed' THEN 1 END) as completed_donations,
  SUM(CASE WHEN status = 'completed' THEN amount ELSE 0 END) as total_completed_amount,
  NULL as month
FROM public.donations 
WHERE status = 'completed'

UNION ALL

SELECT 
  'monthly' as stat_type,
  COUNT(*) as total_donations,
  COALESCE(SUM(amount), 0) as total_amount,
  COALESCE(AVG(amount), 0) as average_donation,
  COUNT(CASE WHEN status = 'completed' THEN 1 END) as completed_donations,
  SUM(CASE WHEN status = 'completed' THEN amount ELSE 0 END) as total_completed_amount,
  DATE_TRUNC('month', created_at) as month
FROM public.donations 
WHERE status = 'completed'
GROUP BY DATE_TRUNC('month', created_at)
ORDER BY month DESC NULLS FIRST;

-- Create a function to get donation statistics (this can be called publicly)
CREATE OR REPLACE FUNCTION public.get_donation_statistics()
RETURNS TABLE (
  total_donations bigint,
  total_amount numeric,
  average_donation numeric,
  completed_donations bigint,
  total_completed_amount numeric
) 
LANGUAGE SQL
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT 
    COUNT(*)::bigint as total_donations,
    COALESCE(SUM(amount), 0) as total_amount,
    COALESCE(AVG(amount), 0) as average_donation,
    COUNT(CASE WHEN status = 'completed' THEN 1 END)::bigint as completed_donations,
    SUM(CASE WHEN status = 'completed' THEN amount ELSE 0 END) as total_completed_amount
  FROM public.donations 
  WHERE status = 'completed';
$$;

-- Grant execute permission on the statistics function to the public
GRANT EXECUTE ON FUNCTION public.get_donation_statistics() TO anon;
GRANT EXECUTE ON FUNCTION public.get_donation_statistics() TO authenticated;