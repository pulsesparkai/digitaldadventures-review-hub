export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price?: string;
  affiliateLink: string;
  category: string;
  rating?: number;
  features?: string[];
  pros?: string[];
  cons?: string[];
  isSponsored?: boolean;
  brandName?: string;
  modelNumber?: string;
  availability?: 'in-stock' | 'out-of-stock' | 'limited';
  lastUpdated?: string;
}

export interface Review {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  rating: number;
  category: string;
  featuredImage: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  isAI: boolean;
  tags?: string[];
  readTime?: number;
  seoTitle?: string;
  seoDescription?: string;
  product?: Product;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
  productCount: number;
  featured: boolean;
  seoTitle?: string;
  seoDescription?: string;
  parentCategory?: string;
  subcategories?: Category[];
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface LoadingState {
  isLoading: boolean;
  error: string | null;
}

export interface SearchFilters {
  query?: string;
  category?: string;
  minRating?: number;
  maxPrice?: number;
  sortBy?: 'rating' | 'price' | 'date' | 'name';
  sortOrder?: 'asc' | 'desc';
}