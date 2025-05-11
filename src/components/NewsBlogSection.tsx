import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Linking,
  ScrollView,
} from 'react-native';
import {useTheme, AppColors} from '../context/ThemeContext';
import NewsDropdown from './NewsDropdown';
import BlogsDropdown from './BlogsDropdown';

// Mock data for news articles
const newsArticles = [
  {
    id: '1',
    title: 'Creaform Unveils New 3D Measurement Software',
    thumbnail: 'https://via.placeholder.com/150x100/00B5AD/FFFFFF?text=3D+Measurement',
    category: '3D SCANNERS',
    author: 'Rodolfo Hernandez',
    date: 'March 14, 2025',
    url: 'https://3dprintingindustry.com/',
  },
  {
    id: '2',
    title: 'New 3DMakerpro Eagle 3D Scanner Series',
    thumbnail: 'https://via.placeholder.com/150x100/00B5AD/FFFFFF?text=3D+Scanner',
    category: '3D SCANNERS',
    author: 'Ada Shaikhnag',
    date: 'February 11, 2025',
    url: 'https://3dprintingindustry.com/',
  },
  {
    id: '3',
    title: 'LEAP 71 Advances in Rocket Engine Program',
    thumbnail: 'https://via.placeholder.com/150x100/00B5AD/FFFFFF?text=Rocket+Engine',
    category: 'AEROSPACE',
    author: 'Paloma Duran',
    date: 'May 09, 2025',
    url: 'https://3dprintingindustry.com/',
  },
  {
    id: '4',
    title: 'AMUG Announces 2025 3D Printing Scholarship Recipients',
    thumbnail: 'https://via.placeholder.com/150x100/00B5AD/FFFFFF?text=Scholarship',
    category: 'EDUCATION',
    author: 'Alex Tyrer-Jones',
    date: 'March 06, 2025',
    url: 'https://3dprintingindustry.com/',
  },
];

// Mock data for blog posts
const blogPosts = [
  {
    id: '1',
    title: 'Getting Started with 3D Printing: A Complete Guide',
    thumbnail: 'https://via.placeholder.com/150x100/FF9800/FFFFFF?text=Beginners+Guide',
    category: 'BEGINNERS GUIDE',
    author: 'John Smith',
    date: 'April 10, 2025',
    url: 'https://www.sculpteo.com/en/',
  },
  {
    id: '2',
    title: 'Top 10 3D Printing Materials in 2025',
    thumbnail: 'https://via.placeholder.com/150x100/FF9800/FFFFFF?text=Materials',
    category: 'MATERIALS',
    author: 'Emma Johnson',
    date: 'May 05, 2025',
    url: 'https://www.sculpteo.com/en/',
  },
  {
    id: '3',
    title: 'How to Optimize Your 3D Print Settings',
    thumbnail: 'https://via.placeholder.com/150x100/FF9800/FFFFFF?text=Optimization',
    category: 'TUTORIALS',
    author: 'Michael Chen',
    date: 'March 22, 2025',
    url: 'https://www.sculpteo.com/en/',
  },
  {
    id: '4',
    title: '3D Printing in Healthcare: Case Studies',
    thumbnail: 'https://via.placeholder.com/150x100/FF9800/FFFFFF?text=Healthcare',
    category: 'CASE STUDIES',
    author: 'Sarah Williams',
    date: 'February 18, 2025',
    url: 'https://www.sculpteo.com/en/',
  },
];

interface NewsBlogSectionProps {
  // Add any props if needed
}

const NewsBlogSection: React.FC<NewsBlogSectionProps> = () => {
  const {isDarkMode, colors} = useTheme();
  const [activeTab, setActiveTab] = useState('news');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredContent, setFilteredContent] = useState(newsArticles);

  useEffect(() => {
    if (activeTab === 'news') {
      if (selectedCategory) {
        setFilteredContent(
          newsArticles.filter(item => item.category === selectedCategory),
        );
      } else {
        setFilteredContent(newsArticles);
      }
    } else {
      if (selectedCategory) {
        setFilteredContent(
          blogPosts.filter(item => item.category === selectedCategory),
        );
      } else {
        setFilteredContent(blogPosts);
      }
    }
  }, [activeTab, selectedCategory]);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const handleOpenURL = (url: string) => {
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
  };

  const renderArticleItem = ({item}: {item: any}) => (
    <TouchableOpacity
      style={[
        styles.articleCard,
        {
          backgroundColor: isDarkMode ? '#333' : AppColors.white,
          borderColor: isDarkMode ? '#444' : '#eee',
        },
      ]}
      onPress={() => handleOpenURL(item.url)}>
      <Image source={{uri: item.thumbnail}} style={styles.thumbnail} />
      <View style={styles.articleInfo}>
        <Text
          style={[
            styles.articleTitle,
            {color: isDarkMode ? AppColors.white : '#333'},
          ]}
          numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.articleCategory}>{item.category}</Text>
        <View style={styles.articleMeta}>
          <Text
            style={[
              styles.articleAuthor,
              {color: isDarkMode ? '#ccc' : '#666'},
            ]}>
            {item.author}
          </Text>
          <Text
            style={[
              styles.articleDate,
              {color: isDarkMode ? '#ccc' : '#666'},
            ]}>
            {item.date}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === 'news' && [
              styles.activeTab,
              {borderBottomColor: AppColors.teal},
            ],
          ]}
          onPress={() => {
            setActiveTab('news');
            setSelectedCategory('');
          }}>
          <Text
            style={[
              styles.tabText,
              {color: isDarkMode ? AppColors.white : '#333'},
              activeTab === 'news' && {color: AppColors.teal},
            ]}>
            NEWS
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === 'blogs' && [
              styles.activeTab,
              {borderBottomColor: AppColors.teal},
            ],
          ]}
          onPress={() => {
            setActiveTab('blogs');
            setSelectedCategory('');
          }}>
          <Text
            style={[
              styles.tabText,
              {color: isDarkMode ? AppColors.white : '#333'},
              activeTab === 'blogs' && {color: AppColors.teal},
            ]}>
            BLOGS
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.filtersContainer}>
        {activeTab === 'news' ? (
          <NewsDropdown onCategorySelect={handleCategorySelect} />
        ) : (
          <BlogsDropdown onCategorySelect={handleCategorySelect} />
        )}
        {selectedCategory ? (
          <TouchableOpacity
            style={styles.clearFilter}
            onPress={() => setSelectedCategory('')}>
            <Text style={{color: AppColors.teal}}>Clear filter</Text>
          </TouchableOpacity>
        ) : null}
      </View>

      <FlatList
        data={filteredContent}
        renderItem={renderArticleItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.articlesList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  tabsContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 10,
  },
  activeTab: {
    borderBottomWidth: 2,
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  filtersContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  clearFilter: {
    marginLeft: 10,
    padding: 8,
  },
  articlesList: {
    paddingBottom: 20,
  },
  articleCard: {
    flexDirection: 'row',
    marginBottom: 15,
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
  },
  thumbnail: {
    width: 100,
    height: 100,
  },
  articleInfo: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  articleTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  articleCategory: {
    fontSize: 12,
    color: AppColors.teal,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  articleMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  articleAuthor: {
    fontSize: 12,
  },
  articleDate: {
    fontSize: 12,
  },
});

export default NewsBlogSection; 