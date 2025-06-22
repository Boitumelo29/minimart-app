import { supabase } from "../lib/supabaseClient";

const BASE_URL = 'https://fakestoreapi.com';

export const signIn = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.trim(),
    password: password.trim()
  });

  // if (error !== null) return data;
  
  return data;
};

export const signUp = async (email, password, username) => {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        displayName: username
      }
    }
  });

  if (error !== null) return data;

  return error;
}

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) return error;

}
