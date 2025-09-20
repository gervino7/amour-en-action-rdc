-- Remove the overly restrictive policy that blocks all access
DROP POLICY IF EXISTS "Block all direct access to donation records" ON public.donations;

-- Create a policy that allows system access while protecting user privacy
-- This allows backend functions to access donations while blocking direct user access
CREATE POLICY "System access only for donations" 
ON public.donations 
FOR SELECT 
USING (
  -- Only allow access through specific system contexts
  -- This prevents direct user queries while allowing backend functions
  current_setting('role') = 'service_role' OR
  current_setting('request.jwt.claims', true)::json->>'role' = 'service_role'
);

-- Update the statistics function to use SECURITY DEFINER properly
-- This allows it to access the donations table even with restricted policies
CREATE OR REPLACE FUNCTION public.get_public_donation_stats()
RETURNS JSON
LANGUAGE SQL
SECURITY DEFINER
STABLE
SET search_path = public
AS $$
  SELECT json_build_object(
    'total_completed_donations', COUNT(CASE WHEN status = 'completed' THEN 1 END),
    'total_amount_raised', COALESCE(SUM(CASE WHEN status = 'completed' THEN amount ELSE 0 END), 0)
  )
  FROM public.donations;
$$;

-- Ensure the payment verification functions can still work
-- by allowing the verify-donation edge function to access the data it needs