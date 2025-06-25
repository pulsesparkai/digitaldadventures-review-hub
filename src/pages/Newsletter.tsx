
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Mail, Check } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [interests, setInterests] = useState<string[]>([]);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const categories = [
    'Kitchen Gadgets',
    'Fitness Equipment',
    'Desk Gear',
    'Outdoor Gear',
    'Tools',
    'Family Tech'
  ];

  const handleInterestChange = (category: string, checked: boolean) => {
    if (checked) {
      setInterests([...interests, category]);
    } else {
      setInterests(interests.filter(i => i !== category));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    console.log('Newsletter subscription:', { email, interests });
    
    toast({
      title: "Subscribed!",
      description: "Thanks for subscribing to our newsletter. You'll receive our latest reviews and recommendations.",
    });

    setIsSubscribed(true);
  };

  if (isSubscribed) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h1 className="text-4xl font-bold mb-4">You're All Set!</h1>
              <p className="text-xl text-gray-600">
                Welcome to the DigitalDadVentures newsletter. You'll receive our latest product reviews, 
                buying guides, and family tech recommendations straight to your inbox.
              </p>
            </div>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">What to Expect:</h3>
                <ul className="text-left space-y-2 text-gray-600">
                  <li>• Weekly roundup of new product reviews</li>
                  <li>• Exclusive buying guides and recommendations</li>
                  <li>• Early access to special deals and discounts</li>
                  <li>• Family tech trends and insights</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-blue-100 rounded-full">
              <Mail className="h-12 w-12 text-blue-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">Join Our Newsletter</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get the latest product reviews, buying guides, and family tech recommendations 
            delivered straight to your inbox. No spam, just honest recommendations.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Subscribe to DigitalDadVentures</CardTitle>
              <CardDescription>
                Stay updated with our latest reviews and get exclusive access to deals and insights.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <Label className="text-base font-semibold">I'm interested in (optional):</Label>
                  <div className="mt-3 space-y-3">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox
                          id={category}
                          checked={interests.includes(category)}
                          onCheckedChange={(checked) => handleInterestChange(category, checked as boolean)}
                        />
                        <Label htmlFor={category} className="text-sm font-normal">
                          {category}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700">
                  Subscribe to Newsletter
                </Button>
              </form>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold mb-2">What You'll Get:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Weekly product recommendations</li>
                  <li>• Exclusive buying guides</li>
                  <li>• Deal alerts and discounts</li>
                  <li>• Family tech trends</li>
                </ul>
                <p className="text-xs text-gray-500 mt-3">
                  Unsubscribe anytime. We respect your privacy and never share your email.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Newsletter;
