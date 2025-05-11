import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme, AppColors} from '../context/ThemeContext';

interface ThemeToggleProps {
  style?: object;
}

const ThemeToggle = ({style = {}}: ThemeToggleProps) => {
  const {isDarkMode, toggleTheme} = useTheme();

  return (
    <TouchableOpacity 
      style={[styles.container, style]} 
      onPress={toggleTheme} 
      activeOpacity={0.7}
    >
      <Icon 
        name={isDarkMode ? 'white-balance-sunny' : 'moon-waning-crescent'} 
        size={24} 
        color={isDarkMode ? '#FFD700' : AppColors.teal} 
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ThemeToggle; 