-- Fix security issues: Add proper RLS policies for sensitive data

-- First, create the enum type and user roles table
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'app_role') THEN
        CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');
    END IF;
END $$;

-- Create user_roles table if it doesn't exist
CREATE TABLE IF NOT EXISTS public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE (user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create policy for user_roles table (admin users can manage roles)
DROP POLICY IF EXISTS "Admin users can manage user roles" ON public.user_roles;
CREATE POLICY "Admin users can manage user roles" 
ON public.user_roles 
FOR ALL 
USING (
  EXISTS (
    SELECT 1 FROM public.user_roles ur 
    WHERE ur.user_id = auth.uid() 
    AND ur.role = 'admin'
  )
);

-- 1. Fix cookie consent data exposure - restrict read access to authenticated admins only
DROP POLICY IF EXISTS "Allow anonymous cookie consent operations" ON public.cookie_consents;

-- Allow public insert for cookie consents (needed for functionality)
CREATE POLICY "Allow public insert for cookie consent" 
ON public.cookie_consents 
FOR INSERT 
WITH CHECK (true);

-- Allow public update for cookie consents (needed for functionality)
CREATE POLICY "Allow public update for cookie consent" 
ON public.cookie_consents 
FOR UPDATE 
USING (true);

-- Create admin-only read policy for cookie consents
CREATE POLICY "Admin users can view cookie consents" 
ON public.cookie_consents 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM public.user_roles 
    WHERE user_id = auth.uid() 
    AND role = 'admin'
  )
);

-- 2. Fix form submission tables - add admin-only read policies

-- Partnership inquiries
DROP POLICY IF EXISTS "Allow anonymous partnership inquiries" ON public.partnership_inquiries;
CREATE POLICY "Allow public insert for partnership inquiries" 
ON public.partnership_inquiries 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Admin users can view partnership inquiries" 
ON public.partnership_inquiries 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM public.user_roles 
    WHERE user_id = auth.uid() 
    AND role = 'admin'
  )
);

-- Contact submissions  
DROP POLICY IF EXISTS "Allow anonymous form submissions" ON public.contact_submissions;
CREATE POLICY "Allow public insert for contact submissions" 
ON public.contact_submissions 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Admin users can view contact submissions" 
ON public.contact_submissions 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM public.user_roles 
    WHERE user_id = auth.uid() 
    AND role = 'admin'
  )
);

-- Product submissions
DROP POLICY IF EXISTS "Allow anonymous product submissions" ON public.product_submissions;
CREATE POLICY "Allow public insert for product submissions" 
ON public.product_submissions 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Admin users can view product submissions" 
ON public.product_submissions 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM public.user_roles 
    WHERE user_id = auth.uid() 
    AND role = 'admin'
  )
);

-- Newsletter subscriptions
DROP POLICY IF EXISTS "Allow anonymous newsletter subscriptions" ON public.newsletter_subscriptions;
CREATE POLICY "Allow public insert for newsletter subscriptions" 
ON public.newsletter_subscriptions 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Admin users can view newsletter subscriptions" 
ON public.newsletter_subscriptions 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM public.user_roles 
    WHERE user_id = auth.uid() 
    AND role = 'admin'
  )
);