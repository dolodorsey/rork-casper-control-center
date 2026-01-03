import { useState, useEffect, useMemo, useCallback } from 'react';
import createContextHook from '@nkzw/create-context-hook';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface CasperContextType {
  hasSeenIntro: boolean;
  setHasSeenIntro: (value: boolean) => void;
  selectedPortal: string | null;
  setSelectedPortal: (portal: string | null) => void;
}

export const [CasperProvider, useCasper] = createContextHook<CasperContextType>(() => {
  const [hasSeenIntro, setHasSeenIntroState] = useState(false);
  const [selectedPortal, setSelectedPortal] = useState<string | null>(null);

  useEffect(() => {
    AsyncStorage.getItem('hasSeenIntro')
      .then((value) => {
        if (value === 'true') {
          setHasSeenIntroState(true);
        }
      })
      .catch((error) => {
        console.error('[CasperProvider] Failed to load intro state:', error);
      });
  }, []);

  const setHasSeenIntro = useCallback((value: boolean) => {
    setHasSeenIntroState(value);
    AsyncStorage.setItem('hasSeenIntro', value.toString())
      .catch((error) => {
        console.error('[CasperProvider] Failed to save intro state:', error);
      });
  }, []);

  return useMemo(() => ({
    hasSeenIntro,
    setHasSeenIntro,
    selectedPortal,
    setSelectedPortal,
  }), [hasSeenIntro, setHasSeenIntro, selectedPortal]);
});