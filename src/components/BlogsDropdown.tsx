import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme, AppColors} from '../context/ThemeContext';

interface BlogsDropdownProps {
  onCategorySelect: (category: string) => void;
}

const BlogsDropdown: React.FC<BlogsDropdownProps> = ({onCategorySelect}) => {
  const [visible, setVisible] = useState(false);
  const {isDarkMode, colors} = useTheme();

  const categories = [
    'BEGINNERS GUIDE',
    'TUTORIALS',
    'CASE STUDIES',
    'INDUSTRY TRENDS',
    'SOFTWARE',
    'MATERIALS',
    'PRINTING TECHNIQUES',
  ];

  const toggleDropdown = () => {
    setVisible(!visible);
  };

  const handleSelect = (category: string) => {
    onCategorySelect(category);
    setVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.dropdownButton,
          {backgroundColor: isDarkMode ? '#333' : AppColors.lightTeal},
        ]}
        onPress={toggleDropdown}>
        <Text
          style={[
            styles.dropdownButtonText,
            {color: isDarkMode ? AppColors.white : AppColors.teal},
          ]}>
          BLOGS
        </Text>
        <Icon
          name={visible ? 'chevron-up' : 'chevron-down'}
          size={20}
          color={isDarkMode ? AppColors.white : AppColors.teal}
        />
      </TouchableOpacity>

      <Modal
        visible={visible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setVisible(false)}>
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setVisible(false)}>
          <View
            style={[
              styles.dropdownMenu,
              {
                backgroundColor: isDarkMode ? '#333' : AppColors.white,
                top: 60, // Position below the button
              },
            ]}>
            <ScrollView>
              {categories.map((category, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.dropdownItem,
                    index < categories.length - 1 && styles.borderBottom,
                  ]}
                  onPress={() => handleSelect(category)}>
                  <Text
                    style={[
                      styles.dropdownItemText,
                      {color: isDarkMode ? AppColors.white : '#333'},
                    ]}>
                    {category}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    zIndex: 1000,
  },
  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 4,
    minWidth: 120,
  },
  dropdownButtonText: {
    fontWeight: 'bold',
    marginRight: 8,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  dropdownMenu: {
    position: 'absolute',
    left: 10,
    right: 10,
    borderRadius: 4,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    maxHeight: 300,
  },
  dropdownItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  dropdownItemText: {
    fontSize: 16,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
});

export default BlogsDropdown; 