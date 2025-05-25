export const env = {
  supabase: {
    url: import.meta.env.VITE_SUPABASE_URL,
    anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY,
  },
} as const;

// Validate environment variables
if (!env.supabase.url) {
  throw new Error('VITE_SUPABASE_URL is not defined');
}

if (!env.supabase.anonKey) {
  throw new Error('VITE_SUPABASE_ANON_KEY is not defined');
}

export type Env = typeof env; 