
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Mail } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    if (!agreedToTerms) {
      toast({
        title: "Error",
        description: "Please agree to our terms and privacy policy",
        variant: "destructive"
      });
      return;
    }

    try {
      const { error } = await supabase
        .from('newsletter_subscriptions')
        .insert({
          email: email,
          interests: [],
          agreed_to_terms: agreedToTerms
        });

      if (error) throw error;

      setIsSubmitted(true);
      setEmail('');
      setAgreedToTerms(false);
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      toast({
        title: "Error",
        description: "There was an issue subscribing to the newsletter. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-r from-orange-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-2xl mx-auto border-orange-200">
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <Mail className="h-6 w-6 text-orange-600" />
            </div>
            <CardTitle className="text-xl sm:text-2xl mb-2">Join Our Growing Community</CardTitle>
            <CardDescription className="text-base sm:text-lg">
              Join our growing community of families and parents seeking smarter product recommendations.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 h-12 sm:h-14"
                  />
                  <Button type="submit" className="bg-primary hover:bg-primary/90 w-full sm:w-auto min-h-[48px] sm:min-h-[56px]">
                    Subscribe
                  </Button>
                </div>
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="agreedToTerms"
                    checked={agreedToTerms}
                    onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                    required
                  />
                  <Label htmlFor="agreedToTerms" className="text-xs leading-tight">
                    I agree to the{' '}
                    <a href="/terms" className="text-orange-600 hover:underline">Terms of Service</a>
                    {' '}and{' '}
                    <a href="/privacy" className="text-orange-600 hover:underline">Privacy Policy</a>
                  </Label>
                </div>
              </form>
            ) : (
              <div className="text-center">
                <p className="text-green-600 font-semibold">Thank you for subscribing!</p>
                <p className="text-gray-600 text-sm mt-2">
                  You'll receive our latest reviews and recommendations.
                </p>
              </div>
            )}
            <p className="text-xs text-gray-500 text-center mt-4">
              No spam, ever. Unsubscribe anytime. See our privacy policy for details.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default NewsletterSignup;
