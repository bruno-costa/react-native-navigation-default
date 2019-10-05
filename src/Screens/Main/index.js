import React, { Component } from 'react';
import { View, Text, } from 'react-native';

import styles from '$src/Styles/elements/basic';

export default class Main extends Component {
  render() {
    return (
      <View style={styles.containerCenter}>
        <Text style={styles.h1}>Main Screen</Text>
      </View>
    );
  }
}