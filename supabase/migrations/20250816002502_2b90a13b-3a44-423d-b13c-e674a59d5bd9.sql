-- Fix remaining security issues - just need to add missing OTP expiry guidance

-- The database RLS policies are already correctly configured
-- All form tables now have admin-only read access
-- Cookie consent data is now restricted to admin users
-- User roles system is in place

-- Note: The OTP expiry issue needs to be fixed in Supabase Auth settings
-- This cannot be fixed via SQL migration