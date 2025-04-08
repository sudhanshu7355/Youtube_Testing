import { Text, StyleSheet, View, ScrollView, Image } from 'react-native';
import React, { Component } from 'react';

export default class ScrollProfile extends Component {
  render() {
    const profiles = [
      { id: 1, name: 'John Doe', role: 'Developer', image: 'https://randomuser.me/api/portraits/men/1.jpg' },
      { id: 2, name: 'Jane Smith', role: 'Designer', image: 'https://randomuser.me/api/portraits/women/2.jpg' },
      { id: 3, name: 'Alice Brown', role: 'Manager', image: 'https://randomuser.me/api/portraits/women/3.jpg' },
      { id: 4, name: 'Michael Lee', role: 'Engineer', image: 'https://randomuser.me/api/portraits/men/4.jpg' },
      { id: 5, name: 'David Kim', role: 'Analyst', image: 'https://randomuser.me/api/portraits/men/5.jpg' },
      { id: 6, name: 'Emily Davis', role: 'Marketing', image: 'https://randomuser.me/api/portraits/women/6.jpg' },
      { id: 7, name: 'Daniel Garcia', role: 'Consultant', image: 'https://randomuser.me/api/portraits/men/7.jpg' },
      { id: 8, name: 'Sophia Wilson', role: 'HR', image: 'https://randomuser.me/api/portraits/women/8.jpg' },
      { id: 9, name: 'James Anderson', role: 'Support', image: 'https://randomuser.me/api/portraits/men/9.jpg' },
      { id: 10, name: 'Olivia Martinez', role: 'CEO', image: 'https://randomuser.me/api/portraits/women/10.jpg' },
    ];

    return (
      <View style={styles.container}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}>
          {profiles.map((profile) => (
            <View key={profile.id} style={styles.profileCard}>
              <Image source={{ uri: profile.image }} style={styles.profileImage} />
              <Text style={styles.profileName}>{profile.name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  scrollContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  profileCard: {
    alignItems: 'center',
    width: 80,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 8,
  },
  profileName: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  profileRole: {
    color: '#bbb',
    fontSize: 10,
    textAlign: 'center',
  },
});
