-- Fix security issues: Add proper RLS policies for sensitive data

-- 1. Fix cookie consent data exposure - restrict read access to authenticated users only
DROP POLICY IF EXISTS "Allow public insert for cookie consent" ON public.cookie_consents;
DROP POLICY IF EXISTS "Allow public read for cookie consent" ON public.cookie_consents;

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

-- Allow public insert for cookie consents (needed for functionality)
CREATE POLICY "Allow public insert for cookie consent" 
ON public.cookie_consents 
FOR INSERT 
WITH CHECK (true);

-- 2. Fix form submission tables - add admin-only read policies

-- Partnership inquiries
DROP POLICY IF EXISTS "Allow insert for partnership inquiries" ON public.partnership_inquiries;
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
DROP POLICY IF EXISTS "Allow insert for contact submissions" ON public.contact_submissions;
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
DROP POLICY IF EXISTS "Allow insert for product submissions" ON public.product_submissions;
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
DROP POLICY IF EXISTS "Allow insert for newsletter subscriptions" ON public.newsletter_subscriptions;
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

-- Create admin role if it doesn't exist and user roles table if needed
CREATE TYPE IF NOT EXISTS public.app_role AS ENUM ('admin', 'moderator', 'user');

CREATE TABLE IF NOT EXISTS public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE (user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create policy for user_roles table
CREATE POLICY "Admin users can manage user roles" 
ON public.user_roles 
FOR ALL 
USING (
  EXISTS (
    SELECT 1 FROM public.user_roles 
    WHERE user_id = auth.uid() 
    AND role = 'admin'
  )
);