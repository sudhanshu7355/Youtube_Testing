import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Header extends Component {
  render() {
    function handleLogoClicked(){
      console.log("Logo Button Clicked")
    }
    return (
      <View>
        <View style={styles.container}>
          <View style={styles.leftSection}>
            <TouchableOpacity>
              <Image
                testID="Logo"
                source={require('../assets/Youtube.png')}
                style={styles.logo}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.rightSection}>
            <TouchableOpacity style={styles.iconButton} testID="CastLogo">
              <Icon name="cast" size={24} color={'#fff'} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.iconButton}
              testID="NotificationIcon">
              <Icon name="notifications" size={24} color={'#fff'} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton} testID="SearchIcon">
              <Icon name="search" size={24} color={'#fff'} />
            </TouchableOpacity>
          </View>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: '#121212',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    elevation: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
    marginTop: '9%',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    height: 80,
    width: 120,
    resizeMode: 'contain',
  },
  iconButton: {
    marginLeft: 20,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
});
