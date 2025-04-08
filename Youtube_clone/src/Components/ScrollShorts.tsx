import { 
    Text, 
    StyleSheet, 
    View, 
    ScrollView, 
    ImageBackground, 
    TouchableOpacity 
  } from 'react-native';
  import React, { Component } from 'react';
  import Icon from 'react-native-vector-icons/MaterialIcons';
  
  export default class ScrollShorts extends Component {
    // Mock data for shorts
    shortsData = [
      { 
        id: 1, 
        title: 'Funny moment!', 
        views: '1.2M', 
        channel: 'Comedy Central',
        thumbnail: 'https://picsum.photos/200/300',
        timeAgo: '2 hours ago'
      },
      { 
        id: 2, 
        title: 'Try not to laugh', 
        views: '856K', 
        channel: 'Challenge Time',
        thumbnail: 'https://picsum.photos/200/301',
        timeAgo: '1 day ago'
      },
      { 
        id: 3, 
        title: 'Amazing trick!', 
        views: '3.4M', 
        channel: 'Magic World',
        thumbnail: 'https://picsum.photos/200/302',
        timeAgo: '3 days ago'
      },
      { 
        id: 4, 
        title: 'Cute animals', 
        views: '5.7M', 
        channel: 'Animal Planet',
        thumbnail: 'https://picsum.photos/200/303',
        timeAgo: '1 week ago'
      },
      { 
        id: 5, 
        title: 'DIY life hacks', 
        views: '2.1M', 
        channel: 'Home Solutions',
        thumbnail: 'https://picsum.photos/200/304',
        timeAgo: '2 weeks ago'
      },
    ];
  
    renderShortItem = (item) => (
      <TouchableOpacity 
        key={item.id} 
        style={styles.shortItem}
        testID={`short-item-${item.id}`}
      >
        <ImageBackground 
          source={{ uri: item.thumbnail }} 
          style={styles.shortBackground}
          imageStyle={styles.backgroundImageStyle}
          testID={`short-image-${item.id}`}
        >
          {/* Gradient overlay for better text visibility */}
          <View style={styles.gradientOverlay} testID={`short-overlay-${item.id}`} />
          
          {/* Content container */}
          <View style={styles.contentContainer} testID={`short-content-${item.id}`}>
            <Text 
              style={styles.shortTitle} 
              numberOfLines={2}
              testID={`short-title-${item.id}`}
            >
              {item.title}
            </Text>
            <Text 
              style={styles.shortChannel}
              testID={`short-channel-${item.id}`}
            >
              {item.channel}
            </Text>
            <View style={styles.metaContainer} testID={`short-meta-${item.id}`}>
              <Text 
                style={styles.shortViews}
                testID={`short-views-${item.id}`}
              >
                {item.views} views
              </Text>
              <Text 
                style={styles.timeAgo}
                testID={`short-timeago-${item.id}`}
              >
                • {item.timeAgo}
              </Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  
    render() {
      return (
        <View style={styles.container} testID="shorts-container">
          <View style={styles.headingContainer} testID="shorts-header">
            <Icon 
              name="video-library" 
              size={24} 
              color="red" 
              testID="shorts-icon" 
            />
            <Text 
              style={styles.headingText}
              testID="shorts-header-text"
            >
              Shorts
            </Text>
          </View>
          
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
            testID="shorts-scrollview"
          >
            {this.shortsData.map(this.renderShortItem)}
          </ScrollView>
        </View>
      );
    }
  }
  
  // ... (keep the same styles as before)
  
  const styles = StyleSheet.create({
    container: {
      marginVertical: 16,
    },
    headingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
      marginBottom: 12,
    },
    headingText: {
      fontSize: 20,
      fontWeight: 'bold',
      marginLeft: 10,
      color: '#fff',
    },
    scrollContent: {
      paddingLeft: 16,
    },
    shortItem: {
      width: 130,
      height: 230, // Fixed height for consistency
      marginRight: 12,
      borderRadius: 8,
      overflow: 'hidden',
    },
    shortBackground: {
      flex: 1,
      justifyContent: 'flex-end',
    },
    backgroundImageStyle: {
      borderRadius: 8,
    },
    gradientOverlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0,0,0,0.3)',
    },
    contentContainer: {
      padding: 12,
    },
    shortTitle: {
      fontSize: 14,
      fontWeight: '600',
      color: 'white',
      marginBottom: 6,
      textShadowColor: 'rgba(0, 0, 0, 0.5)',
      textShadowOffset: { width: 0, height: 1 },
      textShadowRadius: 2,
    },
    shortChannel: {
      fontSize: 12,
      color: 'rgba(255,255,255,0.9)',
      marginBottom: 4,
    },
    metaContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    shortViews: {
      fontSize: 12,
      color: 'rgba(255,255,255,0.8)',
    },
    timeAgo: {
      fontSize: 12,
      color: 'rgba(255,255,255,0.8)',
      marginLeft: 4,
    },
  });