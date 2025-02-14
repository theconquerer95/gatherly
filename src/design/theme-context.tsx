import React, {createContext, useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useColorScheme} from 'hooks/useColorScheme';

import {darkTheme, lightTheme} from './theme';

const THEME_STORAGE_KEY = 'gatherly-theme';

type ThemeMode = 'light' | 'dark' | 'system';

interface ThemeContextProps {
  theme: typeof lightTheme | typeof darkTheme;
  navTheme: typeof lightTheme | typeof darkTheme;
  themeMode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const {isDarkColorScheme} = useColorScheme();
  const [themeMode, setThemeMode] = useState<ThemeMode>('system');

  useEffect(() => {
    AsyncStorage.getItem(THEME_STORAGE_KEY).then(storedTheme => {
      if (storedTheme) setThemeMode(storedTheme as ThemeMode);
    });
  }, []);

  const isDark =
    themeMode === 'dark' || (themeMode === 'system' && isDarkColorScheme);
  const activeTheme = isDark ? darkTheme : lightTheme;
  const activeNavTheme = isDark ? darkTheme : lightTheme;

  const toggleTheme = () => {
    const newTheme = themeMode === 'dark' ? 'light' : 'dark';
    setThemeMode(newTheme);
    AsyncStorage.setItem(THEME_STORAGE_KEY, newTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: activeTheme,
        navTheme: activeNavTheme,
        themeMode,
        toggleTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};
