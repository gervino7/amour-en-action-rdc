-- Ensure RLS is enabled on donations table (it should be but let's make sure)
ALTER TABLE public.donations ENABLE ROW LEVEL SECURITY;

-- Drop the potentially problematic statistics view
DROP VIEW IF EXISTS public.donation_statistics;

-- Create a simple, secure function to get only essential public statistics
-- Remove SECURITY DEFINER to fix the linter warning
CREATE OR REPLACE FUNCTION public.get_public_donation_stats()
RETURNS JSON
LANGUAGE SQL
STABLE
SET search_path = public
AS $$
  SELECT json_build_object(
    'total_completed_donations', COUNT(CASE WHEN status = 'completed' THEN 1 END),
    'total_amount_raised', COALESCE(SUM(CASE WHEN status = 'completed' THEN amount ELSE 0 END), 0)
  )
  FROM public.donations;
$$;

-- Grant execute permission to public users for basic stats only
GRANT EXECUTE ON FUNCTION public.get_public_donation_stats() TO anon;
GRANT EXECUTE ON FUNCTION public.get_public_donation_stats() TO authenticated;

-- Remove the detailed statistics function that had SECURITY DEFINER
DROP FUNCTION IF EXISTS public.get_donation_statistics();

-- Ensure the donations table has proper RLS policies
-- Verify there are no other SELECT policies that could expose data
-- The table should now only allow:
-- 1. INSERT for creating donations (existing policy)
-- 2. No public SELECT access to individual records