-- Add a restrictive SELECT policy that blocks all direct access to donation records
-- This ensures no one can read individual donor information
CREATE POLICY "Block all direct access to donation records" 
ON public.donations 
FOR SELECT 
USING (false);

-- This completely prevents reading individual donation records
-- while still allowing the INSERT policy for creating donations
-- and the public statistics function for aggregate data