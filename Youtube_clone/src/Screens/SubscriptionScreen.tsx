import { ScrollView, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import Header from '../Components/Header'
import ScrollProfile from '../Components/ScrollProfile'
import ScrollButtons from '../Components/ScrollButtons'
import Card from '../Components/Card'
import { data } from '../assets/Data/Data'
import ScrollShorts from '../Components/ScrollShorts'
import Footer from '../Components/Footer'

export default class SubscriptionScreen extends Component {
  render() {
    return (
      <View style={styles.container} testID="subscription-screen">
        <ScrollView testID="subscription-scrollview">
            <View testID="subscription-header">
            <Header />
            </View>
          <View style={{backgroundColor:'#121212'}} testID="content-container">
            <View testID="scroll-profile">
            <ScrollProfile />
            </View>
            <View testID="scroll-buttons">
            <ScrollButtons />
            </View>
            <TouchableOpacity 
              key={data[0].id} 
              testID={`card-${data[0].id}`}
            >
              <Card item={data[0]} testID={`card-content-${data[0].id}`} />
            </TouchableOpacity>
            <View testID="scroll-shorts">
            <ScrollShorts />
            </View>
            <TouchableOpacity 
              key={data[1].id} 
              testID={`card-${data[1].id}`}
            >
              <Card item={data[1]} testID={`card-content-${data[1].id}`} />
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View>
          <Footer />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#000',
  },
})