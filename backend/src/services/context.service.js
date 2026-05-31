import { supabase } from "../config/supabase.js";

export async function getUserContext() {
  const { data, error } = await supabase
    .from("user_context")
    .select("*")
    .limit(1)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}