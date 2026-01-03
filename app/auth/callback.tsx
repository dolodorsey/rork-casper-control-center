import { useEffect } from 'react';
import { router } from 'expo-router';
import * as Linking from 'expo-linking';
import { supabase } from '@/lib/supabase';

export default function AuthCallback() {
  useEffect(() => {
    const subscription = Linking.addEventListener('url', async (event) => {
      const url = event.url;
      const { data, error } = await supabase.auth.exchangeCodeForSession(url);
      if (error) {
        console.error('Auth callback error:', error);
      }
      if (data?.session) {
        router.replace('/');
      }
    });
    
    return () => {
      subscription.remove();
    };
  }, []);

  return null;
}
