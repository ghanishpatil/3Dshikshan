import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  useColorScheme,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const ProfileScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const handleLogin = () => {
    // In a real app, you would perform authentication here
    if (username && password) {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  const renderLoginForm = () => {
    return (
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Login</Text>
        
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your username"
            value={username}
            onChangeText={setUsername}
          />
        </View>
        
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>
        
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.linkButton}>
          <Text style={styles.linkText}>Create an account</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderProfile = () => {
    return (
      <View style={styles.profileContainer}>
        <View style={styles.avatarPlaceholder}>
          <Text style={styles.avatarText}>{username.charAt(0).toUpperCase()}</Text>
        </View>
        
        <Text style={styles.profileName}>{username}</Text>
        <Text style={styles.profileEmail}>{username.toLowerCase()}@example.com</Text>
        
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>5</Text>
            <Text style={styles.statLabel}>Courses</Text>
          </View>
          
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Projects</Text>
          </View>
          
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>3</Text>
            <Text style={styles.statLabel}>Certificates</Text>
          </View>
        </View>
        
        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
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
          <Text style={styles.title}>
            {isLoggedIn ? 'My Profile' : 'Account'}
          </Text>
        </View>
        
        {isLoggedIn ? renderProfile() : renderLoginForm()}
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
  formContainer: {
    padding: 20,
  },
  formTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#555',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#00ACAC',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkButton: {
    marginTop: 15,
    alignItems: 'center',
  },
  linkText: {
    color: '#00ACAC',
    fontSize: 16,
  },
  profileContainer: {
    padding: 20,
    alignItems: 'center',
  },
  avatarPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#00ACAC',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  avatarText: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold',
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  profileEmail: {
    fontSize: 16,
    color: '#777',
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 30,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00ACAC',
  },
  statLabel: {
    fontSize: 14,
    color: '#555',
  },
});

export default ProfileScreen; 