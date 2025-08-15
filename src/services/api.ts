import { Product, Review, Category, ApiResponse, SearchFilters } from '@/types';
import { API_BASE_URL, getApiHeaders } from '@/config/api';

// Configuration
const API_HEADERS = getApiHeaders();

class ApiError extends Error {
  constructor(message: string, public status?: number) {
    super(message);
    this.name = 'ApiError';
  }
}

const handleResponse = async <T>(response: Response): Promise<ApiResponse<T>> => {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: 'Network error' }));
    throw new ApiError(errorData.message || 'Request failed', response.status);
  }
  
  return response.json();
};

// Products API
export const productsApi = {
  getAll: async (filters?: SearchFilters): Promise<ApiResponse<Product[]>> => {
    const params = new URLSearchParams();
    if (filters?.query) params.append('search', filters.query);
    if (filters?.category) params.append('category', filters.category);
    if (filters?.minRating) params.append('minRating', filters.minRating.toString());
    if (filters?.maxPrice) params.append('maxPrice', filters.maxPrice.toString());
    if (filters?.sortBy) params.append('sortBy', filters.sortBy);
    if (filters?.sortOrder) params.append('sortOrder', filters.sortOrder);

    const response = await fetch(`${API_BASE_URL}/products?${params}`, {
      headers: API_HEADERS
    });
    return handleResponse<Product[]>(response);
  },

  getById: async (id: string): Promise<ApiResponse<Product>> => {
    const response = await fetch(`${API_BASE_URL}/products/${id}`);
    return handleResponse<Product>(response);
  },

  getByCategory: async (categorySlug: string, filters?: SearchFilters): Promise<ApiResponse<Product[]>> => {
    const params = new URLSearchParams();
    if (filters?.query) params.append('search', filters.query);
    if (filters?.sortBy) params.append('sortBy', filters.sortBy);
    if (filters?.sortOrder) params.append('sortOrder', filters.sortOrder);

    const response = await fetch(`${API_BASE_URL}/products/category/${categorySlug}?${params}`);
    return handleResponse<Product[]>(response);
  },

  getFeatured: async (limit: number = 10): Promise<ApiResponse<Product[]>> => {
    const response = await fetch(`${API_BASE_URL}/products/featured?limit=${limit}`);
    return handleResponse<Product[]>(response);
  }
};

// Reviews API
export const reviewsApi = {
  getAll: async (filters?: SearchFilters): Promise<ApiResponse<Review[]>> => {
    const params = new URLSearchParams();
    if (filters?.query) params.append('search', filters.query);
    if (filters?.category) params.append('category', filters.category);
    if (filters?.sortBy) params.append('sortBy', filters.sortBy);
    if (filters?.sortOrder) params.append('sortOrder', filters.sortOrder);

    const response = await fetch(`${API_BASE_URL}/reviews?${params}`);
    return handleResponse<Review[]>(response);
  },

  getBySlug: async (slug: string): Promise<ApiResponse<Review>> => {
    const response = await fetch(`${API_BASE_URL}/reviews/${slug}`);
    return handleResponse<Review>(response);
  },

  getFeatured: async (limit: number = 6): Promise<ApiResponse<Review[]>> => {
    const response = await fetch(`${API_BASE_URL}/reviews/featured?limit=${limit}`);
    return handleResponse<Review[]>(response);
  },

  getByCategory: async (categorySlug: string): Promise<ApiResponse<Review[]>> => {
    const response = await fetch(`${API_BASE_URL}/reviews/category/${categorySlug}`);
    return handleResponse<Review[]>(response);
  }
};

// Categories API
export const categoriesApi = {
  getAll: async (): Promise<ApiResponse<Category[]>> => {
    const response = await fetch(`${API_BASE_URL}/categories`);
    return handleResponse<Category[]>(response);
  },

  getBySlug: async (slug: string): Promise<ApiResponse<Category>> => {
    const response = await fetch(`${API_BASE_URL}/categories/${slug}`);
    return handleResponse<Category>(response);
  },

  getFeatured: async (): Promise<ApiResponse<Category[]>> => {
    const response = await fetch(`${API_BASE_URL}/categories/featured`);
    return handleResponse<Category[]>(response);
  }
};

// Lowe's integration (example for external API)
export const lowesApi = {
  searchProducts: async (query: string, category?: string): Promise<Product[]> => {
    // This would integrate with Lowe's API if available
    // For now, return mock data structure
    console.log('Searching Lowe\'s for:', query, category);
    return [];
  },

  getProductDetails: async (productId: string): Promise<Product | null> => {
    // This would fetch detailed product info from Lowe's
    console.log('Getting Lowe\'s product details for:', productId);
    return null;
  }
};

// Error handling helper
export const isApiError = (error: unknown): error is ApiError => {
  return error instanceof ApiError;
};

export { ApiError };