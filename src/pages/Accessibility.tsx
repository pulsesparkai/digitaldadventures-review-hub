import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Accessibility as AccessibilityIcon, Eye, Keyboard, Volume2, MousePointer } from 'lucide-react';

const Accessibility = () => {
  return (
    <>
      <Helmet>
        <title>Accessibility Statement - DigitalDadVentures</title>
        <meta 
          name="description" 
          content="Our commitment to digital accessibility and inclusive design for all users. Learn about our accessibility features and contact us for assistance." 
        />
        <meta property="og:title" content="Accessibility Statement - DigitalDadVentures" />
        <meta property="og:description" content="Our commitment to digital accessibility and inclusive design for all users." />
        <link rel="canonical" href="https://digitaldadventures.com/accessibility" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="container mx-auto px-4 py-8 max-w-4xl">
          <div className="text-center mb-8">
            <AccessibilityIcon className="h-16 w-16 text-primary mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Accessibility Statement
            </h1>
            <p className="text-xl text-muted-foreground">
              We're committed to ensuring digital accessibility for all users
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
                <Eye className="h-6 w-6 mr-2 text-primary" />
                Our Commitment
              </h2>
              <p className="text-muted-foreground mb-4">
                DigitalDadVentures is committed to ensuring that our website is accessible to people with disabilities. 
                We strive to adhere to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards and 
                continuously work to improve the accessibility of our content for all users.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
                <Keyboard className="h-6 w-6 mr-2 text-primary" />
                Accessibility Features
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="font-semibold text-foreground mb-2">Keyboard Navigation</h3>
                  <p className="text-muted-foreground text-sm">
                    Full keyboard navigation support with logical tab order and visible focus indicators.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="font-semibold text-foreground mb-2">Screen Reader Support</h3>
                  <p className="text-muted-foreground text-sm">
                    Semantic HTML, ARIA labels, and descriptive alt text for images and interactive elements.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="font-semibold text-foreground mb-2">Color Contrast</h3>
                  <p className="text-muted-foreground text-sm">
                    High contrast ratios meeting WCAG standards for better readability.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="font-semibold text-foreground mb-2">Responsive Design</h3>
                  <p className="text-muted-foreground text-sm">
                    Mobile-friendly design that works across all devices and screen sizes.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
                <Volume2 className="h-6 w-6 mr-2 text-primary" />
                Assistive Technologies
              </h2>
              <p className="text-muted-foreground mb-4">
                Our website is designed to work with assistive technologies including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Screen readers (NVDA, JAWS, VoiceOver)</li>
                <li>Keyboard navigation tools</li>
                <li>Voice recognition software</li>
                <li>Browser zoom functionality up to 200%</li>
                <li>High contrast and dark mode displays</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
                <MousePointer className="h-6 w-6 mr-2 text-primary" />
                Known Issues & Ongoing Improvements
              </h2>
              <p className="text-muted-foreground mb-4">
                We regularly audit our website for accessibility compliance and are continuously working to improve. 
                Some areas we're actively enhancing include:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Improving form validation messaging</li>
                <li>Enhancing mobile touch target sizes</li>
                <li>Optimizing page load performance</li>
                <li>Expanding alternative text descriptions</li>
              </ul>
            </section>

            <section className="mb-8 bg-primary/5 p-6 rounded-lg border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Feedback & Support
              </h2>
              <p className="text-muted-foreground mb-4">
                We welcome your feedback on the accessibility of our website. If you encounter any accessibility barriers 
                or have suggestions for improvement, please contact us:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Email:</strong> accessibility@digitaldadventures.com</p>
                <p><strong>Response Time:</strong> We aim to respond within 2 business days</p>
                <p><strong>Alternative Format:</strong> Content available in alternative formats upon request</p>
              </div>
            </section>

            <section className="text-sm text-muted-foreground">
              <p>
                This accessibility statement was last updated on {new Date().toLocaleDateString()}.
              </p>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Accessibility;