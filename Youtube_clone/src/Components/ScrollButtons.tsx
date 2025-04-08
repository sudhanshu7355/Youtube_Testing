import { Text, StyleSheet, View , ScrollView, TouchableOpacity  } from 'react-native'
import React, { Component } from 'react'


export default class  extends Component {
  render() {
    return (
      <View style={styles.bottomSection}>
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={styles.scrollView}>
                  {[
                    'Home',
                    'Trending',
                    'Latest',
                    'Popular',
                    'News',
                    'Sports',
                    'Tech',
                    'Music',
                    'Movies',
                    'Lifestyle',
                  ].map((name, index) => (
                    <TouchableOpacity
                      key={index}
                      style={styles.touchable}
                      testID={`category-${index}`}>
                      <Text style={styles.touchableText}>{name}</Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
    )
  }
}

const styles = StyleSheet.create({
    bottomSection: {
        marginVertical: 10,
      },
      scrollView: {
        flexDirection: 'row',
        paddingHorizontal: 10,
      },
      touchable: {
        backgroundColor: '#1e1e1e',
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginHorizontal: 5,
        borderRadius: 10,
      },
      touchableText: {
        color: '#fff',
        fontSize: 14,
      },
})