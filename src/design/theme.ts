import {DarkTheme, DefaultTheme} from '@react-navigation/native';

const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'hsl(0, 0%, 100%)',
    foreground: 'hsl(240, 10%, 3.9%)',
    card: 'hsl(0, 0%, 100%)',
    'card-foreground': 'hsl(240, 10%, 3.9%)',
    popover: 'hsl(0, 0%, 100%)',
    'popover-foreground': 'hsl(240, 10%, 3.9%)',
    primary: 'hsl(240, 5.9%, 10%)',
    'primary-foreground': 'hsl(0, 0%, 98%)',
    secondary: 'hsl(240, 4.8%, 95.9%)',
    'secondary-foreground': 'hsl(240, 5.9%, 10%)',
    muted: 'hsl(240, 4.8%, 95.9%)',
    'muted-foreground': 'hsl(240, 3.8%, 46.1%)',
    border: 'hsl(240, 5.9%, 90%)',
  },
};

const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: 'hsl(240, 10%, 3.9%)',
    foreground: 'hsl(0, 0%, 98%)',
    card: 'hsl(240, 10%, 3.9%)',
    'card-foreground': 'hsl(0, 0%, 98%)',
    popover: 'hsl(240, 10%, 3.9%)',
    'popover-foreground': 'hsl(0, 0%, 98%)',
    primary: 'hsl(0, 0%, 98%)',
    'primary-foreground': 'hsl(240, 5.9%, 10%)',
    secondary: 'hsl(240, 3.7%, 15.9%)',
    'secondary-foreground': 'hsl(0, 0%, 98%)',
    muted: 'hsl(240, 3.7%, 15.9%)',
    'muted-foreground': 'hsl(240, 5%, 64.9%)',
    border: 'hsl(240, 3.7%, 15.9%)',
  },
};

export {darkTheme, lightTheme};
