/**
 * 3D Shikshan React Native App
 */

import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import SplashScreen from './src/screens/SplashScreen';
import MainApp from './src/screens/MainApp';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from './src/context/ThemeContext';

function App(): React.JSX.Element {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashFinish = () => {
    setShowSplash(false);
  };

  return (
    <ThemeProvider>
      <SafeAreaProvider>
        {showSplash ? (
          <SplashScreen onFinish={handleSplashFinish} />
        ) : (
          <MainApp />
        )}
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  // Styles moved to their respective components
});

export default App;
