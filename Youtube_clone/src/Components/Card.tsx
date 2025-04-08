import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class Card extends Component {
  render() { 
    const { item } = this.props;
    
    return (
      <View style={styles.container}>
        <View style={styles.imgView}>
          <Image
          testID='thumbnail-image' 
            source={{ uri: item.Thumbnail }} 
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.contentView}>
          <View style={styles.left}>
            <Image 
              testID='profile-image'
              source={{ uri: item.Profile }} 
              style={styles.profileImage}
            />
          </View>
          <View style={styles.middle}>
            <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
            <Text style={styles.profileName}> by {item['Profile-Name']}{' .'} <Text style={styles.date}>{item.Date}</Text></Text>
          </View>
          <View style={styles.right}>
            <TouchableOpacity testID="more-options-button">
            <Icon testID="more-options-icon" name='more-vert' size={20} color={"grey"} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        height: 230,
        width: '98%',
        marginBlock: 10,
        overflow: 'hidden'
    },
    imgView: {
      height: '70%',
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'center',
    },
    contentView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 10,
      height: '30%',
      // backgroundColor: '#2a2a2a'
    },
    left: {
      height: 50,
      width: 50,
      borderRadius: 25,
      overflow: 'hidden',
      backgroundColor: '#333'
    },
    profileImage: {
      width: '100%',
      height: '100%'
    },
    middle: {
      flex: 1,
      paddingHorizontal: 10,
      justifyContent: 'center'
    },
    right: {
      width: 50,
      alignItems: 'center'
    },
    title: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5
    },
    profileName: {
      color: '#aaa',
      fontSize: 12
    },
    date: {
      color: '#aaa',
      fontSize: 12
    }
})