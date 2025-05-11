import React, {createContext, useState, useContext, ReactNode} from 'react';
import {useColorScheme} from 'react-native';

// App theme colors
export const AppColors = {
  // Primary colors
  teal: '#00B5AD',
  lightTeal: '#E0F7F7',
  white: '#FFFFFF',
  // Secondary colors
  orange: '#FF9800',
  green: '#4CAF50',
  red: '#F44336',
  // Text colors
  darkText: '#333333',
  lightText: '#FFFFFF',
  // Background colors for dark mode
  darkBackground: '#121212',
  darkSurface: '#242424',
};

type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
  colors: {
    primary: string;
    background: string;
    card: string;
    text: string;
    border: string;
    accent: string;
  };
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({children}: {children: ReactNode}) => {
  const colorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(colorScheme === 'dark');

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  // Define theme colors based on mode
  const colors = {
    primary: AppColors.teal,
    background: isDarkMode ? AppColors.darkBackground : AppColors.lightTeal,
    card: isDarkMode ? AppColors.darkSurface : AppColors.white,
    text: isDarkMode ? AppColors.lightText : AppColors.darkText,
    border: isDarkMode ? '#444444' : '#DDDDDD',
    accent: isDarkMode ? AppColors.teal : AppColors.teal,
  };

  return (
    <ThemeContext.Provider value={{isDarkMode, toggleTheme, colors}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 