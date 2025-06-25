
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Star, ExternalLink, Info, ShoppingCart, Check, X } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ProductReview = () => {
  const { slug } = useParams();
  
  // Sample product data - in real app, this would come from CMS/database
  const products = {
    'dash-mini-bundt-cake-maker': {
      title: 'Dash Mini Bundt Cake Maker Review',
      category: 'Kitchen',
      rating: 4.5,
      price: '$19.99',
      isAI: false,
      image: '/placeholder.svg',
      intro: 'After weeks of testing this compact cake maker in our family kitchen, we\'ve put together this comprehensive review.',
      tldr: 'Perfect for small households and quick treats. Easy to use, easy to clean, but limited to single servings.',
      pros: [
        'Compact size perfect for small kitchens',
        'Easy to use with simple one-button operation',
        'Quick 7-minute cooking time',
        'Easy cleanup with non-stick surface',
        'Affordable price point'
      ],
      cons: [
        'Only makes single-serving cakes',
        'Limited recipe variety',
        'Plastic construction feels cheap',
        'No temperature control'
      ],
      bestFor: ['Small households', 'Quick desserts', 'Kids\' cooking activities', 'Dorm rooms'],
      affiliateLinks: [
        { store: 'Amazon', url: '#', price: '$19.99', commission: 'high' },
        { store: 'Target', url: '#', price: '$22.99', commission: 'medium' },
        { store: 'Walmart', url: '#', price: '$18.99', commission: 'low' }
      ],
      faqs: [
        {
          question: 'How long does it take to make a cake?',
          answer: 'The Dash Mini Bundt Cake Maker takes approximately 6-7 minutes to bake a single-serving cake.'
        },
        {
          question: 'What kind of batter can I use?',
          answer: 'You can use any cake mix or homemade batter. The device works with both sweet and savory recipes.'
        },
        {
          question: 'Is it easy to clean?',
          answer: 'Yes, the non-stick surface makes cleanup simple. Just wipe with a damp cloth after it cools.'
        }
      ]
    },
    'opove-massage-gun': {
      title: 'OPOVE Massage Gun Analysis',
      category: 'Fitness',
      rating: 4.2,
      price: '$89.99',
      isAI: true,
      image: '/placeholder.svg',
      intro: 'Based on comprehensive market analysis, user reviews, and technical specifications, here\'s our AI-powered assessment of the OPOVE Massage Gun.',
      tldr: 'Solid mid-range massage gun with good features at a competitive price. Strong performance but some durability concerns.',
      pros: [
        'Powerful motor with multiple speed settings',
        'Long battery life (6+ hours)',
        'Quiet operation under 35dB',
        'Includes 6 massage heads',
        'Competitive pricing'
      ],
      cons: [
        'Build quality questions from some users',
        'Customer service can be slow',
        'Heavier than premium alternatives',
        'Case quality could be better'
      ],
      bestFor: ['Budget-conscious fitness enthusiasts', 'Casual users', 'Home gym setups'],
      affiliateLinks: [
        { store: 'Amazon', url: '#', price: '$89.99', commission: 'high' },
        { store: 'Direct from OPOVE', url: '#', price: '$79.99', commission: 'medium' }
      ],
      faqs: [
        {
          question: 'How does it compare to Theragun?',
          answer: 'Similar power and features at half the price, but with potentially lower build quality and customer service.'
        },
        {
          question: 'Is it suitable for deep tissue massage?',
          answer: 'Yes, it has enough power for deep tissue work, though not as refined as premium models.'
        }
      ]
    },
    'stanley-cup-review': {
      title: 'Stanley Cup: Worth the Hype?',
      category: 'Family Tech',
      rating: 4.0,
      price: '$44.95',
      isAI: false,
      image: '/placeholder.svg',
      intro: 'We\'ve been using the viral Stanley tumbler for 3 months in our busy family life. Here\'s our honest take.',
      tldr: 'Great insulation and durability, but the hype may be overblown. Solid choice if you need the features.',
      pros: [
        'Excellent temperature retention',
        'Durable stainless steel construction',
        'Fits in most car cup holders',
        'Large capacity (40oz)',
        'Lifetime warranty'
      ],
      cons: [
        'Heavy when full',
        'Price premium for brand name',
        'Large size not practical for everyone',
        'Limited color options in stock'
      ],
      bestFor: ['Heavy water drinkers', 'Long commuters', 'Outdoor enthusiasts'],
      affiliateLinks: [
        { store: 'Stanley Official', url: '#', price: '$44.95', commission: 'high' },
        { store: 'Amazon', url: '#', price: '$39.95', commission: 'medium' },
        { store: 'REI', url: '#', price: '$44.95', commission: 'low' }
      ],
      faqs: [
        {
          question: 'Does it really keep drinks cold for 24 hours?',
          answer: 'In our testing, yes. Ice remained after 24 hours, though the amount depends on ambient temperature.'
        },
        {
          question: 'Is it dishwasher safe?',
          answer: 'Stanley recommends hand washing to preserve the vacuum seal and finish.'
        }
      ]
    }
  };

  const product = products[slug as keyof typeof products];
  
  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The product review you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/reviews">Browse All Reviews</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <article className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="mb-6">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li><Link to="/" className="hover:text-orange-600">Home</Link></li>
            <li>/</li>
            <li><Link to="/reviews" className="hover:text-orange-600">Reviews</Link></li>
            <li>/</li>
            <li><Link to={`/category/${product.category.toLowerCase()}`} className="hover:text-orange-600">{product.category}</Link></li>
            <li>/</li>
            <li className="text-gray-900">{product.title}</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Badge variant="secondary">{product.category}</Badge>
            {product.isAI && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Badge variant="outline" className="text-xs cursor-help">
                      <Info className="h-3 w-3 mr-1" />
                      AI Analysis
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs">This review is AI-generated based on market data, specifications, and user feedback analysis.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>
          
          <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-lg font-semibold">{product.rating}/5</span>
            </div>
            <span className="text-2xl font-bold text-green-600">{product.price}</span>
          </div>
        </div>

        {/* AI Content Disclosure */}
        {product.isAI && (
          <Card className="mb-8 border-blue-200 bg-blue-50">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-1">AI Content Disclosure</h3>
                  <p className="text-sm text-blue-800">
                    This review is generated using AI analysis of product specifications, market data, and aggregated user feedback. 
                    While comprehensive, it may not reflect hands-on testing experience. 
                    <Link to="/ai-content-policy" className="underline ml-1">Learn more about our AI content policy</Link>.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Introduction */}
            <div className="mb-8">
              <p className="text-lg text-gray-700 leading-relaxed">{product.intro}</p>
            </div>

            {/* TL;DR Summary */}
            <Card className="mb-8 border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-900">TL;DR Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-800">{product.tldr}</p>
              </CardContent>
            </Card>

            {/* Pros and Cons */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-700 flex items-center">
                    <Check className="h-5 w-5 mr-2" />
                    Pros
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {product.pros.map((pro, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{pro}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-red-200">
                <CardHeader>
                  <CardTitle className="text-red-700 flex items-center">
                    <X className="h-5 w-5 mr-2" />
                    Cons
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {product.cons.map((con, index) => (
                      <li key={index} className="flex items-start">
                        <X className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{con}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Best For */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Best For</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {product.bestFor.map((item, index) => (
                    <Badge key={index} variant="secondary">{item}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {product.faqs.map((faq, index) => (
                    <div key={index}>
                      <h3 className="font-semibold mb-2">{faq.question}</h3>
                      <p className="text-gray-700">{faq.answer}</p>
                      {index < product.faqs.length - 1 && <Separator className="mt-4" />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Product Image */}
            <div className="aspect-square bg-gray-200 rounded-lg"></div>

            {/* Buy Now Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Where to Buy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {product.affiliateLinks.map((link, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <div className="font-semibold">{link.store}</div>
                        <div className="text-lg font-bold text-green-600">{link.price}</div>
                      </div>
                      <Button asChild size="sm" className="bg-orange-600 hover:bg-orange-700">
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                          View Deal <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </Button>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  * Prices may vary. We earn a commission from purchases made through these links.
                </p>
              </CardContent>
            </Card>

            {/* Related Products */}
            <Card>
              <CardHeader>
                <CardTitle>Related Reviews</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Link to="/review/cuisinart-mini-food-processor" className="block p-3 border rounded-lg hover:shadow-md transition-shadow">
                    <div className="font-semibold text-sm">Cuisinart Mini Food Processor</div>
                    <div className="text-xs text-gray-500">Kitchen • 4.3/5</div>
                  </Link>
                  <Link to="/review/lifepro-sonic-massage-gun" className="block p-3 border rounded-lg hover:shadow-md transition-shadow">
                    <div className="font-semibold text-sm">LifePro Sonic Massage Gun</div>
                    <div className="text-xs text-gray-500">Fitness • 4.6/5</div>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Disclosures */}
        <div className="mt-12 pt-8 border-t">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-orange-200 bg-orange-50">
              <CardHeader>
                <CardTitle className="text-orange-900">Affiliate Disclosure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-orange-800">
                  This post contains affiliate links. If you make a purchase through these links, 
                  we may earn a commission at no additional cost to you. This helps support our 
                  content creation and allows us to continue providing honest reviews.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-900">Editorial Standards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-blue-800">
                  Our reviews are based on research, hands-on testing when possible, and AI analysis 
                  of market data. We maintain editorial independence and only recommend products we 
                  believe offer genuine value to our readers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default ProductReview;
