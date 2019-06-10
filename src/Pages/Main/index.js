import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import colors from '../../Styles/colors'

export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Pagina Main</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});