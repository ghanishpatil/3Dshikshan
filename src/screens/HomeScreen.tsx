import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
} from 'react-native';
import {useTheme, AppColors} from '../context/ThemeContext';
import NewsBlogSection from '../components/NewsBlogSection';

const HomeScreen = () => {
  const {isDarkMode, colors} = useTheme();

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: colors.background}]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={colors.background}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.title}>3D Shikshan</Text>
          <Text style={[styles.subtitle, {color: colors.text}]}>Welcome to 3D Learning</Text>
        </View>
        
        {/* News and Blogs Section */}
        <View style={styles.newsBlogContainer}>
          <Text style={[styles.sectionTitle, {color: colors.text}]}>Latest Updates</Text>
          <NewsBlogSection />
        </View>
        
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, {color: colors.text}]}>Latest Courses</Text>
          <View style={styles.courseContainer}>
            <View style={[styles.courseCard, isDarkMode && styles.darkCard]}>
              <Text style={styles.courseTitle}>3D Modeling Basics</Text>
            </View>
            <View style={[styles.courseCard, isDarkMode && styles.darkCard]}>
              <Text style={styles.courseTitle}>3D Printing 101</Text>
            </View>
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, {color: colors.text}]}>Featured Content</Text>
          <View style={styles.featuredContainer}>
            <View style={[styles.featuredItem, isDarkMode && styles.darkCard]}>
              <Text style={styles.featuredTitle}>Interactive 3D Learning</Text>
            </View>
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
    color: AppColors.teal,
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
  },
  newsBlogContainer: {
    marginBottom: 20,
  },
  section: {
    padding: 15,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    paddingHorizontal: 15,
  },
  courseContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  courseCard: {
    width: '48%',
    height: 120,
    backgroundColor: AppColors.lightTeal,
    borderRadius: 10,
    padding: 15,
    justifyContent: 'flex-end',
  },
  darkCard: {
    backgroundColor: '#004040',
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: AppColors.teal,
  },
  featuredContainer: {
    marginTop: 10,
    paddingHorizontal: 15,
  },
  featuredItem: {
    width: '100%',
    height: 150,
    backgroundColor: AppColors.lightTeal,
    borderRadius: 10,
    padding: 15,
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  featuredTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: AppColors.teal,
  },
});

export default HomeScreen; 