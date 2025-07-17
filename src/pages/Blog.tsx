
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Blog = () => {
  const blogPosts = [];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Blog & Insights</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Thoughts, trends, and insights on family-friendly technology, gadgets, and smart purchasing decisions.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured Post</h2>
          <Card className="hover:shadow-lg transition-shadow">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="aspect-video md:aspect-square bg-gray-200 rounded-l-lg"></div>
              <div className="p-6 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary">{blogPosts[0].category}</Badge>
                  {blogPosts[0].isAI && (
                    <Badge variant="outline" className="text-xs">AI Analysis</Badge>
                  )}
                </div>
                <h3 className="text-2xl font-bold mb-3 hover:text-orange-600 transition-colors">
                  <Link to={`/blog/${blogPosts[0].slug}`}>
                    {blogPosts[0].title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">{blogPosts[0].excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {blogPosts[0].author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(blogPosts[0].date).toLocaleDateString()}
                    </span>
                  </div>
                  <span>{blogPosts[0].readTime}</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Recent Posts */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Recent Posts</h2>
            <Link to="/blog/all" className="text-orange-600 hover:text-orange-700 flex items-center">
              View All Posts <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.slug} className="hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-200 rounded-t-lg"></div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    {post.isAI && (
                      <Badge variant="outline" className="text-xs">AI Analysis</Badge>
                    )}
                  </div>
                  <CardTitle className="hover:text-orange-600 transition-colors">
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
          <CardContent className="text-center p-8">
            <h3 className="text-2xl font-bold mb-4">Stay in the Loop</h3>
            <p className="text-gray-600 mb-6">
              Get our latest blog posts, product reviews, and family tech insights delivered to your inbox.
            </p>
            <Link 
              to="/newsletter" 
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-orange-600 text-white hover:bg-orange-700 h-10 px-4 py-2"
            >
              Subscribe to Newsletter
            </Link>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
