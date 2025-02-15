import { FC, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Platform } from 'react-native';
import { ThemeProvider, useTheme } from '@design/theme-context';
import { ThemeProvider as NavThemeProvider } from '@react-navigation/native';

import AppNavigator from './Navigation/AppNavigator';

import '../global.css';

const useIsomorphicLayoutEffect =
  Platform.OS === 'web' ? useEffect : useLayoutEffect;

type RootLayoutProps = {};

const RootLayout: FC<RootLayoutProps> = () => {
  const hasMounted = useRef(false);
  const { navTheme } = useTheme(); // Get navigation theme
  const [isColorSchemeLoaded, setIsColorSchemeLoaded] = useState(false);

  useIsomorphicLayoutEffect(() => {
    if (hasMounted.current) return;

    setIsColorSchemeLoaded(true);
    hasMounted.current = true;
  }, []);

  if (!isColorSchemeLoaded) return null;

  return (
    <NavThemeProvider value={navTheme}>
      <AppNavigator />
    </NavThemeProvider>
  );
};

export default () => (
  <ThemeProvider>
    <RootLayout />
  </ThemeProvider>
);
