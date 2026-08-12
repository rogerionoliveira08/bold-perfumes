import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabasePublishableKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabasePublishableKey) {
  throw new Error(
    "As configurações públicas do Supabase não foram encontradas.",
  );
}

export const supabase = createClient(
  supabaseUrl,
  supabasePublishableKey,
);