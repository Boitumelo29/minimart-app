import { supabase } from "../lib/supabaseClient";


export const signIn = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.trim(),
    password: password.trim()
  });

  if (error) throw error;
  
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

  if (error) throw error;

  return data;
}

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) return error;

}

export const getSession = async () => {
  const { data, error } = await supabase.auth.getSession()
  if (error) throw error;
  return data.session;
}

export const onAuthChange = (callback) => {
  const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
    callback(session);
  })
  return subscription;
}