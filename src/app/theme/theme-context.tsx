// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { Appearance, useColorScheme, Platform } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const THEME_STORAGE_KEY = 'app-theme';

// type Theme = 'light' | 'dark' | 'system';

// interface ThemeContextProps {
//     theme: Theme;
//     isDarkMode: boolean;
//     toggleTheme: () => void;
//     setTheme: (theme: Theme) => void;
// }

// const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

// export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//     const systemTheme = useColorScheme();
//     const [theme, setThemeState] = useState<Theme>('system');

//     useEffect(() => {
//         // Load saved theme preference
//         AsyncStorage.getItem(THEME_STORAGE_KEY).then((storedTheme) => {
//             if (storedTheme) {
//                 setThemeState(storedTheme as Theme);
//             }
//         });
//     }, []);

//     const isDarkMode = theme === 'dark' || (theme === 'system' && systemTheme === 'dark');

//     const setTheme = (newTheme: Theme) => {
//         setThemeState(newTheme);
//         AsyncStorage.setItem(THEME_STORAGE_KEY, newTheme);

//         // Web only: Apply or remove the `.dark` class
//         if (Platform.OS === 'web') {
//             if (typeof document !== 'undefined') {
//                 if (newTheme === 'dark' || (newTheme === 'system' && systemTheme === 'dark')) {
//                     document.documentElement.classList.add('dark');
//                 } else {
//                     document.documentElement.classList.remove('dark');
//                 }
//             }
//         }
//     };

//     const toggleTheme = () => {
//         setTheme(theme === 'dark' ? 'light' : 'dark');
//     };

//     // Web only: Sync class when system changes (if `system` theme is selected)
//     useEffect(() => {
//         if (theme === 'system' && Platform.OS === 'web' && typeof document !== 'undefined') {
//             document.documentElement.classList.toggle('dark', systemTheme === 'dark');
//         }
//     }, [systemTheme, theme]);

//     return (
//         <ThemeContext.Provider value={{ theme, isDarkMode, toggleTheme, setTheme }}>
//             {children}
//         </ThemeContext.Provider>
//     );
// };

// export const useTheme = () => {
//     const context = useContext(ThemeContext);
//     if (!context) throw new Error('useTheme must be used within a ThemeProvider');
//     return context;
// };
