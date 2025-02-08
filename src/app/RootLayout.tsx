import * as React from 'react';
import { Platform } from 'react-native';
import { Theme, ThemeProvider, DefaultTheme, DarkTheme } from '@react-navigation/native';

import { useColorScheme } from "hooks/useColorScheme";
import { NAV_THEME } from 'utils/constants'

import Login from './Login';

import '../global.css';

const LIGHT_THEME: Theme = {
    ...DefaultTheme,
    // colors: NAV_THEME.light,
};
const DARK_THEME: Theme = {
    ...DarkTheme,
    // colors: NAV_THEME.dark,
};
const useIsomorphicLayoutEffect =
    Platform.OS === 'web' ? React.useEffect : React.useLayoutEffect;


export default function RootLayout() {
    const hasMounted = React.useRef(false);
    const { isDarkColorScheme } = useColorScheme();
    const [isColorSchemeLoaded, setIsColorSchemeLoaded] = React.useState(false);

    useIsomorphicLayoutEffect(() => {
        if (hasMounted.current) {
            return;
        }

        // if (Platform.OS === 'web') {
        //   // Adds the background color to the html element to prevent white background on overscroll.
        //   document.documentElement.classList.add('bg-background');
        // }
        setIsColorSchemeLoaded(true);
        hasMounted.current = true;
    }, []);

    if (!isColorSchemeLoaded) {
        return null;
    }

    console.log('isDarkColorScheme', isDarkColorScheme)

    return (
        <ThemeProvider value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}>
            <Login />
        </ThemeProvider>
    );
}

