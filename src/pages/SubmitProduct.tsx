
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { PackageSearch, Send } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const SubmitProduct = () => {
  const [formData, setFormData] = useState({
    productName: '',
    brand: '',
    category: '',
    productUrl: '',
    price: '',
    contactName: '',
    contactEmail: '',
    company: '',
    description: '',
    keyFeatures: '',
    isAffiliate: false,
    sampleAvailable: false,
    timeline: '',
    agreedToTerms: false
  });

  const categories = [
    'Kitchen', 'Fitness', 'Desk Gear', 'Outdoor', 'Tools', 'Family Tech', 'Other'
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.productName || !formData.contactEmail || !formData.category) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    if (!formData.agreedToTerms) {
      toast({
        title: "Error",
        description: "Please agree to our terms and privacy policy",
        variant: "destructive"
      });
      return;
    }

    try {
      const { error } = await supabase
        .from('product_submissions')
        .insert({
          product_name: formData.productName,
          product_category: formData.category,
          product_url: formData.productUrl,
          product_description: formData.description,
          retail_price: formData.price ? parseFloat(formData.price.replace(/[^0-9.]/g, '')) : null,
          contact_name: formData.contactName,
          contact_email: formData.contactEmail,
          contact_phone: null,
          company_name: formData.company,
          looking_for_review: formData.sampleAvailable,
          agreed_to_terms: formData.agreedToTerms
        });

      if (error) throw error;

      toast({
        title: "Submission Received!",
        description: "Thank you for your product submission. We'll review it and get back to you within 5-7 business days.",
      });

      // Reset form
      setFormData({
        productName: '',
        brand: '',
        category: '',
        productUrl: '',
        price: '',
        contactName: '',
        contactEmail: '',
        company: '',
        description: '',
        keyFeatures: '',
        isAffiliate: false,
        sampleAvailable: false,
        timeline: '',
        agreedToTerms: false
      });
    } catch (error) {
      console.error('Error submitting product:', error);
      toast({
        title: "Error",
        description: "There was an issue submitting your product. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-orange-100 rounded-full">
              <PackageSearch className="h-12 w-12 text-orange-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">Submit a Product for Review</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a product you'd like us to review? We're always looking for innovative, 
            family-friendly products to test and analyze. Submit your product below.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Product Submission Form</CardTitle>
                  <CardDescription>
                    Fill out the form below to submit your product for review consideration.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Product Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Product Information</h3>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="productName">Product Name *</Label>
                          <Input
                            id="productName"
                            value={formData.productName}
                            onChange={(e) => handleInputChange('productName', e.target.value)}
                            placeholder="e.g., UltraWidget Pro 3000"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="brand">Brand</Label>
                          <Input
                            id="brand"
                            value={formData.brand}
                            onChange={(e) => handleInputChange('brand', e.target.value)}
                            placeholder="e.g., TechCorp"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="category">Category *</Label>
                          <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              {categories.map((category) => (
                                <SelectItem key={category} value={category}>{category}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="price">Price Range</Label>
                          <Input
                            id="price"
                            value={formData.price}
                            onChange={(e) => handleInputChange('price', e.target.value)}
                            placeholder="e.g., $50-100"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="productUrl">Product URL</Label>
                        <Input
                          id="productUrl"
                          type="url"
                          value={formData.productUrl}
                          onChange={(e) => handleInputChange('productUrl', e.target.value)}
                          placeholder="https://..."
                        />
                      </div>

                      <div>
                        <Label htmlFor="description">Product Description</Label>
                        <Textarea
                          id="description"
                          value={formData.description}
                          onChange={(e) => handleInputChange('description', e.target.value)}
                          placeholder="Brief description of your product..."
                          rows={3}
                        />
                      </div>

                      <div>
                        <Label htmlFor="keyFeatures">Key Features</Label>
                        <Textarea
                          id="keyFeatures"
                          value={formData.keyFeatures}
                          onChange={(e) => handleInputChange('keyFeatures', e.target.value)}
                          placeholder="List the main features and benefits..."
                          rows={3}
                        />
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Contact Information</h3>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="contactName">Contact Name</Label>
                          <Input
                            id="contactName"
                            value={formData.contactName}
                            onChange={(e) => handleInputChange('contactName', e.target.value)}
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="contactEmail">Email Address *</Label>
                          <Input
                            id="contactEmail"
                            type="email"
                            value={formData.contactEmail}
                            onChange={(e) => handleInputChange('contactEmail', e.target.value)}
                            placeholder="your@email.com"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="company">Company/Organization</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          placeholder="Company name (if applicable)"
                        />
                      </div>
                    </div>

                    {/* Additional Options */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Additional Information</h3>
                      
                      <div>
                        <Label htmlFor="timeline">Preferred Review Timeline</Label>
                        <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="asap">ASAP</SelectItem>
                            <SelectItem value="1month">Within 1 month</SelectItem>
                            <SelectItem value="3months">Within 3 months</SelectItem>
                            <SelectItem value="flexible">Flexible</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="sampleAvailable"
                            checked={formData.sampleAvailable}
                            onCheckedChange={(checked) => handleInputChange('sampleAvailable', checked as boolean)}
                          />
                          <Label htmlFor="sampleAvailable">
                            Product sample available for testing
                          </Label>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="isAffiliate"
                            checked={formData.isAffiliate}
                            onCheckedChange={(checked) => handleInputChange('isAffiliate', checked as boolean)}
                          />
                          <Label htmlFor="isAffiliate">
                            Interested in affiliate partnership
                          </Label>
                        </div>

                        <div className="flex items-start space-x-2 pt-2 border-t">
                          <Checkbox
                            id="agreedToTerms"
                            checked={formData.agreedToTerms}
                            onCheckedChange={(checked) => handleInputChange('agreedToTerms', checked as boolean)}
                            required
                          />
                          <Label htmlFor="agreedToTerms" className="text-sm leading-tight">
                            I agree to the{' '}
                            <a href="/terms" className="text-orange-600 hover:underline">Terms of Service</a>
                            {' '}and{' '}
                            <a href="/privacy" className="text-orange-600 hover:underline">Privacy Policy</a>
                          </Label>
                        </div>
                      </div>
                    </div>

                    <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700">
                      <Send className="h-4 w-4 mr-2" />
                      Submit Product for Review
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Review Process</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-1">1. Submission Review</h4>
                      <p className="text-sm text-gray-600">We review all submissions within 5-7 business days</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">2. Product Evaluation</h4>
                      <p className="text-sm text-gray-600">Selected products undergo hands-on testing or AI analysis</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">3. Review Publication</h4>
                      <p className="text-sm text-gray-600">Complete reviews are published with full transparency</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What We Look For</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>✓ Family-friendly products</li>
                    <li>✓ Innovative features or design</li>
                    <li>✓ Good value proposition</li>
                    <li>✓ Positive user feedback</li>
                    <li>✓ Available through major retailers</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-blue-50">
                <CardContent className="p-4">
                  <p className="text-sm text-blue-800">
                    <strong>Note:</strong> Submitting a product doesn't guarantee a review. 
                    We select products based on our editorial standards and audience interest.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SubmitProduct;
