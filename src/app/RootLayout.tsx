import * as React from 'react';
import {Platform} from 'react-native';
import {ThemeProvider, useTheme} from '@design/theme-context';
import {ThemeProvider as NavThemeProvider} from '@react-navigation/native';

import Login from './Login';

import '../global.css';

const useIsomorphicLayoutEffect =
  Platform.OS === 'web' ? React.useEffect : React.useLayoutEffect;

function RootLayout() {
  const hasMounted = React.useRef(false);
  const {navTheme} = useTheme(); // Get navigation theme
  const [isColorSchemeLoaded, setIsColorSchemeLoaded] = React.useState(false);

  useIsomorphicLayoutEffect(() => {
    if (hasMounted.current) return;

    setIsColorSchemeLoaded(true);
    hasMounted.current = true;
  }, []);

  if (!isColorSchemeLoaded) return null;

  return (
    <NavThemeProvider value={navTheme}>
      <Login />
    </NavThemeProvider>
  );
}

export default () => (
  <ThemeProvider>
    <RootLayout />
  </ThemeProvider>
);
