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

const MapScreen = () => {
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
          <Text style={styles.title}>3D Learning Map</Text>
          <Text style={styles.subtitle}>Explore 3D learning resources</Text>
        </View>
        
        <View style={styles.mapContainer}>
          <View style={styles.mapPlaceholder}>
            <Text style={styles.mapText}>Map View Coming Soon</Text>
            <Text style={styles.mapDescription}>
              This section will display a map of local 3D printing resources and learning centers.
            </Text>
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Nearby Resources</Text>
          <View style={styles.resourceItem}>
            <Text style={styles.resourceName}>3D Printing Lab</Text>
            <Text style={styles.resourceLocation}>Location: Tech Hub, 2nd Floor</Text>
          </View>
          
          <View style={styles.resourceItem}>
            <Text style={styles.resourceName}>3D Design Workshop</Text>
            <Text style={styles.resourceLocation}>Location: Innovation Center</Text>
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
  mapContainer: {
    padding: 15,
  },
  mapPlaceholder: {
    backgroundColor: '#E0F7F7',
    borderRadius: 10,
    padding: 20,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007A7A',
    marginBottom: 10,
  },
  mapDescription: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
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
  resourceItem: {
    backgroundColor: '#E0F7F7',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  resourceName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007A7A',
    marginBottom: 5,
  },
  resourceLocation: {
    fontSize: 14,
    color: '#555',
  },
});

export default MapScreen; 