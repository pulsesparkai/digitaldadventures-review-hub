
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, CheckCircle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    // Simulate newsletter signup
    console.log('Newsletter signup:', email);
    setIsSubscribed(true);
    toast({
      title: "Success!",
      description: "You've been subscribed to our newsletter.",
    });
    
    // Reset after 3 seconds for demo
    setTimeout(() => {
      setIsSubscribed(false);
      setEmail('');
    }, 3000);
  };

  return (
    <section className="py-16 bg-blue-900">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-orange-100 rounded-full">
                <Mail className="h-8 w-8 text-orange-600" />
              </div>
            </div>
            <CardTitle className="text-2xl">Stay Updated</CardTitle>
            <CardDescription className="text-lg">
              Get the latest product reviews, buying guides, and family-friendly recommendations 
              delivered to your inbox weekly.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="flex gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                />
                <Button 
                  type="submit" 
                  className="bg-orange-600 hover:bg-orange-700"
                >
                  Subscribe
                </Button>
              </form>
            ) : (
              <div className="text-center">
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <p className="text-green-700 font-semibold">Thanks for subscribing!</p>
                <p className="text-gray-600">Check your email for confirmation.</p>
              </div>
            )}
            <p className="text-xs text-gray-500 mt-4 text-center">
              No spam, unsubscribe at any time. Read our{' '}
              <a href="/privacy" className="text-orange-600 hover:underline">
                Privacy Policy
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default NewsletterSignup;
