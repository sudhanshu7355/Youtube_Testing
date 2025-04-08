import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Video from "react-native-video";



class VideoPlayer extends Component {
  render() {

    return (
      <View style={styles.videoContainer}>
        <Video
          source={require("../assets/Video1.mp4")}
          style={styles.video}
          controls={true}
          resizeMode="contain"
          repeat={true}
          testID="video"
        />
        <View style={styles.videoContent}>
          <View style={styles.logoCont}>
            <Image source={require('../assets/profile.png')} style={styles.profileImg} testID="profile-image" />
          </View>
          <View style={styles.textCont}>
            <Text style={styles.title} testID="video-title">Title</Text>
            <View style={styles.subCont}>
              <Text style={styles.metadata} testID="video-metadata">metadata</Text>
            </View>
          </View>
          <View style={styles.infoCont}>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  video: {
    width: "100%",
    aspectRatio: 16 / 9,
  },
  videoContainer: {
    height: 320,
  },
  videoContent: {
    flexDirection: 'row',
    marginTop: 8,
  },
  logoCont: {
    marginHorizontal: 10,
    marginTop: 8,
  },
  profileImg: {
    height: 50,
    width: 50,
    borderRadius:50,
  },
  textCont: {
    width: 300,
    marginTop: 5,
  },
  title: {
    color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5
  },
  subCont: {
    marginTop: 2,
  },
  metadata: {
    fontSize: 13,
    color: '#aaa',
  },
  infoCont: {
    width: 30,
    justifyContent: 'center',
  },
  icon: {
    transform: [{ rotate: '45deg' }],
    marginBottom: 8,
  },
});

export default VideoPlayer;
