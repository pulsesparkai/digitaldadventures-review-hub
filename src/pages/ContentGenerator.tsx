import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Copy, Download, FileText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ContentFormData {
  title: string;
  slug: string;
  category: string;
  wordCount: string;
  primaryKeyword: string;
  secondaryKeywords: string;
  topUrls: string;
  internalLinks: string;
}

const ContentGenerator: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContentFormData>({
    title: '',
    slug: '',
    category: '',
    wordCount: '',
    primaryKeyword: '',
    secondaryKeywords: '',
    topUrls: '',
    internalLinks: ''
  });
  const [generatedContent, setGeneratedContent] = useState('');
  const [generatedMeta, setGeneratedMeta] = useState('');
  const [generatedSchema, setGeneratedSchema] = useState('');

  const handleInputChange = (field: keyof ContentFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const generateContent = () => {
    const { title, slug, category, primaryKeyword, secondaryKeywords, wordCount } = formData;
    
    if (!title || !slug || !category || !primaryKeyword) {
      toast({
        title: "Missing Required Fields",
        description: "Please fill in Title, Slug, Category, and Primary Keyword",
        variant: "destructive"
      });
      return;
    }

    const secondaryKwArray = secondaryKeywords.split(',').map(kw => kw.trim());
    const isLongForm = parseInt(wordCount) >= 1800;
    
    // Generate article structure
    const content = `# ${title}

${generateIntro(primaryKeyword, title)}

## Table of Contents
- [Decision Summary](#decision-summary)
- [Comparison Table](#comparison-table)
- [Best Overall Pick](#best-overall)
- [Best Budget Option](#best-budget)
- [Best Heavy-Duty Choice](#best-heavy-duty)
- [Buying Guide](#buying-guide)
- [Who Should Buy This](#who-should-buy)
- [Pros and Cons](#pros-cons)
- [Setup and Usage](#setup-usage)
- [Frequently Asked Questions](#faq)
- [Final Thoughts](#conclusion)

## Decision Summary {#decision-summary}

| Category | Recommendation | Why |
|----------|---------------|-----|
| **Best Overall** | [Product Name] | Perfect balance of performance, durability, and value for most homeowners. |
| **Best Budget** | [Budget Option] | Solid performance at an unbeatable price point for occasional use. |
| **Best Heavy-Duty** | [Premium Option] | Built for contractors and serious DIYers who need maximum power. |

## Comparison Table {#comparison-table}

| Product | Price | Key Feature | Best For | Rating |
|---------|-------|-------------|----------|--------|
| [Product 1] | $XXX | [Feature] | [Use Case] | ⭐⭐⭐⭐⭐ |
| [Product 2] | $XXX | [Feature] | [Use Case] | ⭐⭐⭐⭐ |
| [Product 3] | $XXX | [Feature] | [Use Case] | ⭐⭐⭐⭐ |

${isLongForm ? generateLongFormSections(primaryKeyword, secondaryKwArray) : generateShortFormSections(primaryKeyword, secondaryKwArray)}

## Frequently Asked Questions {#faq}

### What should I look for when choosing ${primaryKeyword}?
Focus on build quality, warranty coverage, and whether the features match your specific needs and usage frequency.

### How much should I expect to spend on ${primaryKeyword}?
Budget options start around $XX, mid-range choices run $XX-XXX, while premium models can reach $XXX+ for professional features.

### Is it worth buying ${primaryKeyword} online vs in-store?
Online typically offers better selection and pricing, but in-store lets you handle the product first. Consider return policies for both.

### How often should I maintain my ${primaryKeyword}?
Follow manufacturer guidelines, but generally inspect before each use and perform deeper maintenance seasonally or after heavy use.

### What's the typical lifespan of ${primaryKeyword}?
Quality models should last 5-10 years with proper care, though usage frequency and conditions significantly impact longevity.

### Can beginners safely use ${primaryKeyword}?
Most modern options include safety features for beginners, but always read instructions thoroughly and start with basic projects.

## Final Thoughts {#conclusion}

Choosing the right ${primaryKeyword} comes down to matching your specific needs with the right features and budget. The recommendations above cover the best options for different situations, from weekend warriors to serious DIYers.

Ready to tackle your next project? [Subscribe to our newsletter](/newsletter) for more practical gear reviews and project guides. Also check out our guides on [related topic 1] and [related topic 2] for complete project success.

---

*This article contains affiliate links. As an Amazon Associate, we earn from qualifying purchases at no cost to you.*`;

    // Generate meta tags
    const metaTitle = title.length <= 60 ? title : title.substring(0, 57) + '...';
    const metaDescription = `Expert ${primaryKeyword} reviews and buying guide. Compare top models, features, and prices to find the perfect option for your needs.`;
    
    const metaContent = `**Meta Title (${metaTitle.length}/60 chars):**
${metaTitle}

**Meta Description (${metaDescription.length}/160 chars):**
${metaDescription}

**Slug:** /${category}/${slug}
**Category:** ${category}
**Primary Keyword:** ${primaryKeyword}
**Secondary Keywords:** ${secondaryKeywords}`;

    // Generate JSON-LD schema
    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          "@id": `https://digitaldadventures.com/${category}/${slug}#article`,
          "headline": title,
          "description": metaDescription,
          "inLanguage": "en-US",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://digitaldadventures.com/${category}/${slug}`
          },
          "author": {
            "@type": "Person",
            "name": "Digital Dad Adventures"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Digital Dad Adventures",
            "logo": {
              "@type": "ImageObject",
              "url": "https://digitaldadventures.com/logo.png"
            }
          },
          "datePublished": new Date().toISOString().split('T')[0],
          "dateModified": new Date().toISOString().split('T')[0],
          "about": secondaryKwArray.map(kw => ({ "@type": "Thing", "name": kw })),
          "mentions": [primaryKeyword, ...secondaryKwArray].map(kw => ({ "@type": "Thing", "name": kw }))
        },
        {
          "@type": "FAQPage",
          "@id": `https://digitaldadventures.com/${category}/${slug}#faq`,
          "mainEntity": [
            {
              "@type": "Question",
              "name": `What should I look for when choosing ${primaryKeyword}?`,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Focus on build quality, warranty coverage, and whether the features match your specific needs and usage frequency."
              }
            },
            {
              "@type": "Question", 
              "name": `How much should I expect to spend on ${primaryKeyword}?`,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Budget options start around $XX, mid-range choices run $XX-XXX, while premium models can reach $XXX+ for professional features."
              }
            }
          ]
        }
      ]
    };

    setGeneratedContent(content);
    setGeneratedMeta(metaContent);
    setGeneratedSchema(JSON.stringify(schema, null, 2));
    
    toast({
      title: "Content Generated!",
      description: "Your SEO-optimized article structure is ready.",
    });
  };

  const generateIntro = (keyword: string, title: string) => {
    return `Looking for the best ${keyword}? You're not alone. Whether you're tackling weekend projects or need reliable gear for regular use, choosing the right ${keyword} can save you time, money, and frustration down the road. This guide breaks down everything you need to know to make the smart choice for your specific needs.`;
  };

  const generateLongFormSections = (primaryKw: string, secondaryKws: string[]) => {
    return `
## Best Overall Pick {#best-overall}

**[Product Name] - $XXX**

[Detailed review of top pick, including specific features, performance, and why it wins overall. Include real user scenarios and testing insights.]

**Key Features:**
- [Feature 1 with benefit]
- [Feature 2 with benefit] 
- [Feature 3 with benefit]

**Best For:** [Specific user types and scenarios]

## Best Budget Option {#best-budget}

**[Budget Product] - $XX**

[Budget pick analysis focusing on value proposition and what you get/give up at this price point.]

## Best Heavy-Duty Choice {#best-heavy-duty}

**[Premium Product] - $XXX**

[Professional-grade option analysis with focus on durability, performance, and ROI for heavy users.]

## Buying Guide {#buying-guide}

### Essential Features to Consider

**Power and Performance**
[Detailed explanation of key performance metrics]

**Build Quality and Durability** 
[What to look for in construction, materials, warranties]

**Size and Portability**
[How to choose the right size for your needs]

**Safety Features**
[Critical safety considerations and must-have features]

## Who Should Buy This {#who-should-buy}

### Homeowners and DIYers
[Specific recommendations for casual users]

### Contractors and Professionals  
[Requirements for heavy-duty commercial use]

### Apartment Dwellers
[Compact options for limited space]

## Pros and Cons {#pros-cons}

### Advantages of Quality ${primaryKw}
- [Pro 1 with explanation]
- [Pro 2 with explanation]
- [Pro 3 with explanation]

### Potential Drawbacks
- [Con 1 with mitigation advice]
- [Con 2 with alternatives]

## Setup and Usage {#setup-usage}

### Initial Setup
[Step-by-step setup guidance]

### Best Practices
[Usage tips for optimal performance and longevity]

### Maintenance Schedule
[Regular maintenance requirements and schedule]`;
  };

  const generateShortFormSections = (primaryKw: string, secondaryKws: string[]) => {
    return `
## Top Picks Breakdown {#breakdown}

### [Product 1] - Best Overall
[Concise review focusing on key strengths and ideal users]

### [Product 2] - Best Value  
[Budget option analysis with value proposition]

### [Product 3] - Best Premium
[High-end option for demanding users]

## Quick Buying Guide {#buying-guide}

**Key Factors:**
- Performance requirements for your projects
- Budget range and value considerations  
- Size and storage constraints
- Frequency of use expectations

## Who Should Buy What {#who-should-buy}

- **Occasional Users:** [Budget recommendation]
- **Regular DIYers:** [Mid-range recommendation] 
- **Heavy Users:** [Premium recommendation]`;
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: `${type} Copied!`,
      description: "Content copied to clipboard",
    });
  };

  const downloadAsFile = (content: string, filename: string) => {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">SEO Content Generator</h1>
          <p className="text-muted-foreground">
            Generate production-ready, SEO-optimized articles for DigitalDadVentures
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Article Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Article Title *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  placeholder="Best Cordless Drills for Homeowners 2024"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="slug">URL Slug *</Label>
                <Input
                  id="slug"
                  value={formData.slug}
                  onChange={(e) => handleInputChange('slug', e.target.value)}
                  placeholder="best-cordless-drills-homeowners"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category *</Label>
                <Select onValueChange={(value) => handleInputChange('category', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tools">Tools</SelectItem>
                    <SelectItem value="yard">Yard</SelectItem>
                    <SelectItem value="outdoor">Outdoor</SelectItem>
                    <SelectItem value="seasonal">Seasonal</SelectItem>
                    <SelectItem value="smarthome">Smart Home</SelectItem>
                    <SelectItem value="projects">Projects</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="wordCount">Target Word Count</Label>
                <Select onValueChange={(value) => handleInputChange('wordCount', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select word count" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="900">Supporting Article (900-1,200)</SelectItem>
                    <SelectItem value="1800">Pillar Article (1,800-2,400)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="primaryKeyword">Primary Keyword *</Label>
                <Input
                  id="primaryKeyword"
                  value={formData.primaryKeyword}
                  onChange={(e) => handleInputChange('primaryKeyword', e.target.value)}
                  placeholder="cordless drill"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="secondaryKeywords">Secondary Keywords</Label>
                <Textarea
                  id="secondaryKeywords"
                  value={formData.secondaryKeywords}
                  onChange={(e) => handleInputChange('secondaryKeywords', e.target.value)}
                  placeholder="best cordless drill, battery drill, power drill, drill reviews"
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="topUrls">Competitor URLs to Beat</Label>
                <Textarea
                  id="topUrls"
                  value={formData.topUrls}
                  onChange={(e) => handleInputChange('topUrls', e.target.value)}
                  placeholder="https://example1.com/article&#10;https://example2.com/article"
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="internalLinks">Internal Links</Label>
                <Textarea
                  id="internalLinks"
                  value={formData.internalLinks}
                  onChange={(e) => handleInputChange('internalLinks', e.target.value)}
                  placeholder="[Best Power Tools](/tools/best-power-tools)&#10;[Tool Storage Guide](/tools/tool-storage)"
                  rows={3}
                />
              </div>

              <Button onClick={generateContent} className="w-full" size="lg">
                Generate SEO Article
              </Button>
            </CardContent>
          </Card>

          {/* Generated Content */}
          <div className="space-y-6">
            {/* Meta Tags */}
            {generatedMeta && (
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Meta Tags & SEO Info</CardTitle>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard(generatedMeta, 'Meta Tags')}
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </CardHeader>
                <CardContent>
                  <pre className="text-sm bg-muted p-4 rounded-lg overflow-auto max-h-60">
                    {generatedMeta}
                  </pre>
                </CardContent>
              </Card>
            )}

            {/* Article Content */}
            {generatedContent && (
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Article Content</CardTitle>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard(generatedContent, 'Article')}
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => downloadAsFile(generatedContent, `${formData.slug || 'article'}.md`)}
                    >
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-sm bg-muted p-4 rounded-lg overflow-auto max-h-96">
                    <pre className="whitespace-pre-wrap">{generatedContent}</pre>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* JSON-LD Schema */}
            {generatedSchema && (
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>JSON-LD Schema</CardTitle>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard(generatedSchema, 'Schema')}
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </CardHeader>
                <CardContent>
                  <pre className="text-sm bg-muted p-4 rounded-lg overflow-auto max-h-60">
                    {generatedSchema}
                  </pre>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentGenerator;