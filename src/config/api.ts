// API Configuration
// This file contains API endpoints and configuration for external services

// ==========================================
// API ENDPOINTS
// ==========================================

// Main API Base URL - Replace with your actual API
export const API_BASE_URL = 'https://api.your-domain.com/v1';

// ==========================================
// EXTERNAL API CONFIGURATIONS
// ==========================================

// Lowe's API Configuration
// Note: If Lowe's provides a public/publishable API key, it can be stored here
// For private keys, use Supabase Edge Functions with secrets management
export const LOWES_CONFIG = {
  // If using a public API key (safe to store in frontend):
  // publicKey: 'your-public-api-key',
  
  // For private keys, create an Edge Function that makes API calls server-side
  // The private key would be stored in Supabase secrets and accessed in the Edge Function
  baseUrl: 'https://api.lowes.com/v1', // Example URL
  endpoints: {
    search: '/products/search',
    details: '/products',
    categories: '/categories'
  }
};

// Other external APIs can be configured similarly
export const EXTERNAL_APIS = {
  // Amazon Associates API (requires server-side handling)
  amazon: {
    baseUrl: 'https://webservices.amazon.com/paapi5',
    // Private keys go in Supabase Edge Functions
  },
  
  // Google Shopping API (may have both public and private components)
  googleShopping: {
    baseUrl: 'https://www.googleapis.com/shopping/v1',
    // Public API key can go here if provided by Google
    // publicApiKey: 'your-google-public-key'
  }
};

// ==========================================
// REQUEST HEADERS & CONFIGURATION
// ==========================================

export const getApiHeaders = (includeAuth = false) => {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  };

  // Add public API keys to headers if available
  // Example:
  // if (LOWES_CONFIG.publicKey) {
  //   headers['X-API-Key'] = LOWES_CONFIG.publicKey;
  // }

  return headers;
};

// ==========================================
// ENVIRONMENT CONFIGURATION NOTES
// ==========================================

/*
IMPORTANT: How to Handle API Keys and Secrets in Lovable

Lovable does NOT support .env files or VITE_* environment variables.

For API keys and secrets, you have these options:

1. PUBLIC/PUBLISHABLE KEYS (Safe to store in frontend code):
   - Can be included directly in this file
   - Examples: Google Maps API key (with domain restrictions), 
     Stripe publishable key, public analytics keys
   
2. PRIVATE/SECRET KEYS (Must be handled server-side):
   - Store in Supabase secrets using the secrets management tool
   - Access them in Supabase Edge Functions
   - Make API calls from Edge Functions, not frontend
   
3. SETTING UP SUPABASE SECRETS:
   - Use the secrets tool to add sensitive API keys
   - Create Edge Functions that use these secrets
   - Frontend calls your Edge Functions instead of external APIs directly

Example Edge Function structure for private API calls:
```typescript
// supabase/functions/lowes-search/index.ts
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

serve(async (req) => {
  // Get secret from Supabase environment
  const lowesApiKey = Deno.env.get('LOWES_API_KEY')
  
  // Make API call with private key
  const response = await fetch('https://api.lowes.com/search', {
    headers: {
      'Authorization': `Bearer ${lowesApiKey}`
    }
  })
  
  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' }
  })
})
```

Then from frontend:
```typescript
// Frontend calls your Edge Function instead
const response = await supabase.functions.invoke('lowes-search', {
  body: { query: 'halloween decorations' }
})
```
*/
