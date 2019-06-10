import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text, ImageBackground, Image } from 'react-native';
import { NavigationActions, DrawerItems, SafeAreaView } from 'react-navigation';

import color from '../Styles/colors';

class SideMenu extends Component {
  navigateToScreen = (route, param = {}) => () => {
    //const navigateAction = NavigationActions.navigate(route);
    this.props.navigation.navigate(route, param);
  }


  render() {
    console.log(this.props)
    return (
      <View style={styles.container}>
        <ScrollView>
          <ImageBackground style={styles.headerContainer} source={require('../../assets/headerBg.jpg')}>
            <Image style={styles.headerAvatar} source={{uri: 'https://randomuser.me/api/portraits/men/62.jpg'}} />
            <Text style={styles.headerNome}>Luciano Borges</Text>
            <Text style={styles.headerEmail}>lucianoborges@gmail.com</Text>
            <View style={styles.headerBorder}></View>
          </ImageBackground>
          <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Main')}>
            Home
          </Text>
          <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Content')}>
            Content
          </Text>
          <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Content2', {title: 'Second Content', id: 42})}>
            Second Content
          </Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerContainer: {
    paddingHorizontal: 32,
    paddingTop: 64,
    paddingBottom: 47
  },
  headerAvatar: {
    width: 78,
    height: 78,
    borderRadius: 12,
    marginBottom: 16,
  },
  headerNome: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold'
  },
  headerEmail: {
    color: '#FFF',
    fontSize: 14
  },
  headerBorder: {
    height: 8,
    backgroundColor: color.main,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItemStyle: {
    padding: 10
  },
});

export default SideMenu;