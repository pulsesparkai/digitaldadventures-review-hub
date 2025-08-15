-- Create cookie consents table for GDPR/CCPA compliance
CREATE TABLE public.cookie_consents (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  visitor_id TEXT NOT NULL,
  consent_given BOOLEAN NOT NULL,
  cookie_categories JSONB DEFAULT '{"essential": true, "analytics": false, "marketing": false, "functional": false}',
  ip_address TEXT,
  user_agent TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index for efficient visitor lookup
CREATE INDEX idx_cookie_consents_visitor_id ON public.cookie_consents(visitor_id);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_cookie_consents_updated_at
  BEFORE UPDATE ON public.cookie_consents
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Enable Row Level Security
ALTER TABLE public.cookie_consents ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous inserts and updates
CREATE POLICY "Allow anonymous cookie consent operations" 
ON public.cookie_consents 
FOR ALL 
USING (true) 
WITH CHECK (true);