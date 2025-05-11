import React from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {SafeAreaView} from 'react-native-safe-area-context';

// Import screens
import HomeScreen from './HomeScreen';
import GuideScreen from './GuideScreen';
import MapScreen from './MapScreen';
import ProfileScreen from './ProfileScreen';

// Import theme components
import {useTheme, AppColors} from '../context/ThemeContext';
import ThemeToggle from '../components/ThemeToggle';

const Tab = createBottomTabNavigator();

function MainApp(): React.JSX.Element {
  const {isDarkMode, colors} = useTheme();

  // Create a wrapper component for each screen to include the theme toggle
  const createScreenWithThemeToggle = (ScreenComponent: React.ComponentType<any>) => {
    return (props: any) => (
      <View style={{flex: 1}}>
        <SafeAreaView edges={['top']} style={styles.themeToggleContainer}>
          <ThemeToggle style={styles.themeToggle} />
        </SafeAreaView>
        <ScreenComponent {...props} />
      </View>
    );
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName = 'circle';

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Guide') {
              iconName = focused ? 'book-open-variant' : 'book-open-outline';
            } else if (route.name === 'Map') {
              iconName = focused ? 'map' : 'map-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'account' : 'account-outline';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: AppColors.teal,
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: isDarkMode ? '#242424' : AppColors.white,
            borderTopColor: colors.border,
          },
          headerShown: false,
        })}>
        <Tab.Screen 
          name="Home" 
          component={createScreenWithThemeToggle(HomeScreen)} 
        />
        <Tab.Screen 
          name="Guide" 
          component={createScreenWithThemeToggle(GuideScreen)} 
        />
        <Tab.Screen 
          name="Map" 
          component={createScreenWithThemeToggle(MapScreen)} 
        />
        <Tab.Screen 
          name="Profile" 
          component={createScreenWithThemeToggle(ProfileScreen)} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  themeToggleContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 999,
  },
  themeToggle: {
    margin: 8,
  }
});

export default MainApp; 