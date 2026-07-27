import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://fphwpwxjkysskhjjbhxd.supabase.co';
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
  'sb_publishable_3IL9UQsHkL6tvu9v6kN_Hw_jIdtx3Oi';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
