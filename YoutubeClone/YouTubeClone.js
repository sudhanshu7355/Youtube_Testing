import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, StatusBar,Video } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const YouTubeClone = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const videos = [
    {
      id: '1',
      thumbnail: require('./assets/thumb1.jpg'),
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      duration: '22:30',
      avatar: require('./assets/picofme.png'),
      title: 'Kunal Kamra Controversy | Rise of Gunda Raj in India | Dhruv Rathee',
      channel: 'Dhruv Rathee',
      views: '1.8 lakh views',
      time: '17 minutes ago',
      category: 'News'
    },
    {
      id: '2',
      thumbnail: require('./assets/thumb1.jpg'),
      duration: '10:45',
      avatar: require('./assets/picofme.png'),
      title: 'Valorant New Map Reveal - First Gameplay',
      channel: 'Gaming Central',
      views: '245k views',
      time: '3 days ago',
      category: 'Gaming'
    },
    {
      id: '3',
      thumbnail: require('./assets/thumb1.jpg'),
      duration: '15:22',
      avatar: require('./assets/picofme.png'),
      title: 'Elden Ring Speedrun World Record Attempt',
      channel: 'SpeedGaming',
      views: '532k views',
      time: '1 week ago',
      category: 'Gaming'
    },
    {
      id: '4',
      thumbnail: require('./assets/thumb1.jpg'),
      duration: '8:15',
      avatar: require('./assets/picofme.png'),
      title: 'Minecraft Build Challenge - 100 Players',
      channel: 'MineCraft Legends',
      views: '112k views',
      time: '2 weeks ago',
      category: 'Gaming'
    },
    {
      id: '5',
      thumbnail: require('./assets/thumb1.jpg'),
      duration: '25:40',
      avatar: require('./assets/picofme.png'),
      title: 'CS:GO Pro Tips and Tricks 2023',
      channel: 'Pro Gaming Hub',
      views: '876k views',
      time: '1 month ago',
      category: 'Gaming'
    }
  ];

  const shorts = [
    {
      id: 's1',
      thumbnail: require('./assets/thumb1.jpg'),
      title: 'Installing... 😮 Ironman Jarvis Ai on Android Ph...'
    },
    {
      id: 's2',
      thumbnail: require('./assets/thumb1.jpg'),
      title: 'Horse Haircut'
    },
    {
      id: 's3',
      thumbnail: require('./assets/thumb1.jpg'),
      title: 'Amazing Magic Trick Revealed'
    },
    {
      id: 's4',
      thumbnail: require('./assets/thumb1.jpg'),
      title: '5 Minute Abs Workout'
    }
  ];

  const filteredVideos = activeCategory === 'All' 
    ? videos 
    : videos.filter(video => video.category === activeCategory);

  const handleCategoryPress = (category) => {
    setActiveCategory(category);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0f0f0f" />
      
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Icon name="logo-youtube" size={24} color="red" />
          <Text style={styles.logoText}>YouTube</Text>
        </View>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="tv-outline" size={22} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <View style={styles.notificationContainer}>
              <Icon name="notifications-outline" size={22} color="white" />
              <View style={styles.badge}>
                <Text style={styles.badgeText}>6</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="search" size={22} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      
      <ScrollView 
        style={styles.mainContent}
        showsVerticalScrollIndicator={false}
      >
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.categoryContainer}
          contentContainerStyle={styles.categoryContent}
        >
          <TouchableOpacity style={styles.exploreButton}>
            <Icon name="compass-outline" size={18} color="white" />
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.categoryButton, activeCategory === 'All' && styles.activeCategoryButton]}
            onPress={() => handleCategoryPress('All')}
          >
            <Text style={activeCategory === 'All' ? styles.activeCategoryText : styles.categoryText}>
              All
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.categoryButton, activeCategory === 'Gaming' && styles.activeCategoryButton]}
            onPress={() => handleCategoryPress('Gaming')}
          >
            <Text style={activeCategory === 'Gaming' ? styles.activeCategoryText : styles.categoryText}>
              Gaming
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.categoryButton, activeCategory === 'AI' && styles.activeCategoryButton]}
            onPress={() => handleCategoryPress('AI')}
          >
            <Text style={activeCategory === 'AI' ? styles.activeCategoryText : styles.categoryText}>
              AI
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.categoryButton, activeCategory === 'Programming' && styles.activeCategoryButton]}
            onPress={() => handleCategoryPress('Programming')}
          >
            <Text style={activeCategory === 'Programming' ? styles.activeCategoryText : styles.categoryText}>
              Programming
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.categoryButton, activeCategory === 'Music' && styles.activeCategoryButton]}
            onPress={() => handleCategoryPress('Music')}
          >
            <Text style={activeCategory === 'Music' ? styles.activeCategoryText : styles.categoryText}>
              Music
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.categoryButton, activeCategory === 'Live' && styles.activeCategoryButton]}
            onPress={() => handleCategoryPress('Live')}
          >
            <Text style={activeCategory === 'Live' ? styles.activeCategoryText : styles.categoryText}>
              Live
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.categoryButton, activeCategory === 'News' && styles.activeCategoryButton]}
            onPress={() => handleCategoryPress('News')}
          >
            <Text style={activeCategory === 'News' ? styles.activeCategoryText : styles.categoryText}>
              News
            </Text>
          </TouchableOpacity>
        </ScrollView>
        
        <View style={styles.shortsHeaderContainer}>
          <View style={styles.shortsLogo}>
            <Icon name="flash" size={24} color="red" />
            <Text style={styles.shortsHeaderText}>Shorts</Text>
          </View>
          <TouchableOpacity>
            <Icon name="ellipsis-vertical" size={20} color="white" />
          </TouchableOpacity>
        </View>
        
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          style={styles.shortsContainer}
          contentContainerStyle={styles.shortsContent}
        >
          {shorts.map(short => (
            <TouchableOpacity key={short.id} style={styles.shortCard}>
              <Image 
                source={short.thumbnail} 
                style={styles.shortThumbnail} 
              />
              <View style={styles.shortCardOverlay}>
                <Text style={styles.shortTitle} numberOfLines={2}>{short.title}</Text>
                <TouchableOpacity style={styles.shortOverlayMenu}>
                  <Icon name="ellipsis-vertical" size={16} color="white" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
        
        <View style={styles.videosContainer}>
          {filteredVideos.map(video => (
            <VideoCard 
              key={video.id}
              thumbnail={video.thumbnail}
              duration={video.duration}
              avatar={video.avatar}
              title={video.title}
              channel={video.channel}
              views={video.views}
              time={video.time}
            />
          ))}
        </View>
      </ScrollView>
      
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="home" size={22} color="white" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navButton}>
          <Icon name="flash-outline" size={22} color="white" />
          <Text style={styles.navText}>Shorts</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.addButton}>
          <Icon name="add" size={24} color="white" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navButton}>
          <View style={styles.subscriptionContainer}>
            <Icon name="play" size={22} color="white" />
            <View style={styles.subscriptionBadge}></View>
          </View>
          <Text style={styles.navText}>Subscriptions</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navButton}>
          <Icon name="person-circle-outline" size={22} color="white" />
          <Text style={styles.navText}>You</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const VideoCard = ({ thumbnail, duration, avatar, title, channel, views, time }) => {
  return (
    <TouchableOpacity style={styles.videoCard}>
      <View style={styles.thumbnailContainer}>
        <Image 
          source={thumbnail} 
          style={styles.videoThumbnail} 
        />
        <View style={styles.videoDuration}>
          <Text style={styles.videoDurationText}>{duration}</Text>
        </View>
      </View>
      
      <View style={styles.videoDetailsContainer}>
        <Image 
          source={avatar} 
          style={styles.channelAvatar} 
        />
        
        <View style={styles.videoInfo}>
          <Text style={styles.videoTitle} numberOfLines={2}>{title}</Text>
          <Text style={styles.videoMeta}>{channel}</Text>
          <Text style={styles.videoMeta}>{views} • {time}</Text>
        </View>
        
        <TouchableOpacity>
          <Icon name="ellipsis-vertical" size={18} color="white" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0f',
    padding: 11,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#0f0f0f',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 4,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 20,
  },
  notificationContainer: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -6,
    backgroundColor: 'red',
    borderRadius: 10,
    minWidth: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  mainContent: {
    flex: 1,
    marginBottom: 60,
  },
  categoryContainer: {
    paddingVertical: 8,
  },
  categoryContent: {
    paddingHorizontal: 8,
  },
  exploreButton: {
    backgroundColor: '#272727',
    borderRadius: 20,
    padding: 8,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
    height: 36,
    width: 36,
  },
  categoryButton: {
    backgroundColor: '#272727',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
    height: 36,
  },
  activeCategoryButton: {
    backgroundColor: 'white',
  },
  categoryText: {
    color: 'white',
    fontSize: 14,
  },
  activeCategoryText: {
    color: 'black',
    fontSize: 14,
    fontWeight: '500',
  },
  shortsHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  shortsLogo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shortsHeaderText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  shortsContainer: {
    marginBottom: 16,
  },
  shortsContent: {
    paddingLeft: 16,
  },
  shortCard: {
    width: 150,
    height: 270,
    marginRight: 10,
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
  },
  shortThumbnail: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  shortCardOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  shortTitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
    flex: 1,
  },
  shortOverlayMenu: {
    padding: 4,
  },
  videosContainer: {
    paddingBottom: 20,
  },
  videoCard: {
    marginBottom: 16,
  },
  thumbnailContainer: {
    position: 'relative',
  },
  videoThumbnail: {
    width: '100%',
    height: 220,
    resizeMode: 'cover',
  },
  videoDuration: {
    position: 'absolute',
    right: 8,
    bottom: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 4,
  },
  videoDurationText: {
    color: 'white',
    fontSize: 12,
  },
  videoDetailsContainer: {
    flexDirection: 'row',
    padding: 12,
    paddingBottom: 0,
  },
  channelAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 12,
  },
  videoInfo: {
    flex: 1,
  },
  videoTitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4,
  },
  videoMeta: {
    color: '#aaa',
    fontSize: 12,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#0f0f0f',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderTopColor: '#272727',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  navText: {
    color: 'white',
    fontSize: 10,
    marginTop: 4,
  },
  addButton: {
    backgroundColor: '#272727',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subscriptionContainer: {
    position: 'relative',
  },
  subscriptionBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'red',
  },
});

export default YouTubeClone;