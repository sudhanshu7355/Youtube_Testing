import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation(); 
  function handleNavigateToHome(){
    console.log("Home Button Clicked")
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.tab} 
        testID='Home'
        activeOpacity={0.7}
        onPress={() => navigation.navigate('Home')}
      >
        <Icon name='home' size={26} color={'#fff'}/>
        <Text style={styles.tabLabel}>Home</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.tab} 
        testID='Shorts'
        activeOpacity={0.7}
      >
        <Icon name='slow-motion-video' size={26} color={'#fff'}/>
        <Text style={styles.tabLabel}>Shorts</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.centerTab} 
        testID='Add'
        activeOpacity={0.7}
      >
        <View style={styles.addButton}>
          <Icon name='add' size={30} color={'#fff'}/>
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.tab} 
        testID='Subscription'
        activeOpacity={0.7}
        onPress={() => navigation.navigate('Subscription')}
      >
        <Icon name='subscriptions' size={26} color={'#fff'}/>
        <Text style={styles.tabLabel}>Subscriptions</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.tab} 
        testID='Profile'
        activeOpacity={0.7}
      >
        <Icon name='account-circle' size={26} color={'#fff'}/>
        <Text style={styles.tabLabel}>You</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 70,
    backgroundColor: '#000',
    borderTopWidth: 0.5,
    borderTopColor: '#e0e0e0',
    paddingHorizontal: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  tab: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    width: 60,
  },
  centerTab: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: '#ff0000',
    width: 40,
    height: 40,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabLabel: {
    fontSize: 10,
    marginTop: 4,
    color: '#fff',
  },
});

export default Footer;
