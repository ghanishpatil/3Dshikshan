import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const GuideScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={[styles.container, backgroundStyle]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.title}>Learning Guide</Text>
          <Text style={styles.subtitle}>Step-by-step tutorials and guides</Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Getting Started</Text>
          <View style={styles.guideItem}>
            <Text style={styles.guideTitle}>Introduction to 3D Modeling</Text>
            <Text style={styles.guideDescription}>
              Learn the basics of 3D modeling and the fundamental concepts.
            </Text>
          </View>
          
          <View style={styles.guideItem}>
            <Text style={styles.guideTitle}>3D Printing Fundamentals</Text>
            <Text style={styles.guideDescription}>
              Understand the principles of 3D printing and materials.
            </Text>
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Advanced Topics</Text>
          <View style={styles.guideItem}>
            <Text style={styles.guideTitle}>Complex Model Design</Text>
            <Text style={styles.guideDescription}>
              Take your 3D modeling skills to the next level.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00ACAC',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
  },
  section: {
    padding: 15,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  guideItem: {
    backgroundColor: '#E0F7F7',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  guideTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007A7A',
    marginBottom: 5,
  },
  guideDescription: {
    fontSize: 14,
    color: '#555',
  },
});

export default GuideScreen; 