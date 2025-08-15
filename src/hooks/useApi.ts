import { useState, useEffect, useCallback } from 'react';
import { LoadingState } from '@/types';
import { ApiError, isApiError } from '@/services/api';

interface UseApiOptions<T> {
  immediate?: boolean;
  initialData?: T;
  onSuccess?: (data: T) => void;
  onError?: (error: string) => void;
}

export function useApi<T>(
  apiCall: () => Promise<{ data: T }>,
  options: UseApiOptions<T> = {}
) {
  const { immediate = true, initialData, onSuccess, onError } = options;
  
  const [data, setData] = useState<T | undefined>(initialData);
  const [loading, setLoading] = useState<LoadingState>({
    isLoading: false,
    error: null
  });

  const execute = useCallback(async () => {
    try {
      setLoading({ isLoading: true, error: null });
      const response = await apiCall();
      setData(response.data);
      onSuccess?.(response.data);
    } catch (error) {
      const errorMessage = isApiError(error) 
        ? error.message 
        : 'An unexpected error occurred';
      
      setLoading({ isLoading: false, error: errorMessage });
      onError?.(errorMessage);
      return;
    }
    
    setLoading({ isLoading: false, error: null });
  }, [apiCall, onSuccess, onError]);

  const retry = useCallback(() => {
    execute();
  }, [execute]);

  const reset = useCallback(() => {
    setData(initialData);
    setLoading({ isLoading: false, error: null });
  }, [initialData]);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return {
    data,
    loading: loading.isLoading,
    error: loading.error,
    execute,
    retry,
    reset
  };
}

// Specialized hooks for common use cases
export function useProducts(filters?: any) {
  return useApi(() => import('@/services/api').then(api => api.productsApi.getAll(filters)));
}

export function useProduct(id: string) {
  return useApi(() => import('@/services/api').then(api => api.productsApi.getById(id)));
}

export function useReviews(filters?: any) {
  return useApi(() => import('@/services/api').then(api => api.reviewsApi.getAll(filters)));
}

export function useReview(slug: string) {
  return useApi(() => import('@/services/api').then(api => api.reviewsApi.getBySlug(slug)));
}

export function useCategories() {
  return useApi(() => import('@/services/api').then(api => api.categoriesApi.getAll()));
}

export function useCategory(slug: string) {
  return useApi(() => import('@/services/api').then(api => api.categoriesApi.getBySlug(slug)));
}