import { Text, StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Card from '../Components/Card'
import { data } from '../assets/Data/Data'
import ScrollButtons from '../Components/ScrollButtons'
import VideoContainer from '../Components/VideoContainer'

export default class LandingScreen extends Component {
  render() {
    return (
      <View style={styles.container} testID="landing-screen">
        <View testID='header'>
          <Header /> 
          <ScrollButtons />
        </View>
        <ScrollView style={styles.MainContent}>
        <View>
          <VideoContainer />
        </View>
        {data.map(item => (
            <TouchableOpacity key={item.id}>
              <Card item={item} />
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View style={{marginTop:-5}}>
          <View testID='footer'>
            <Footer />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#000',
    
  },
  MainContent: {
    height:'84%'
  },
  title: {
    color:'#fff'
  }
})