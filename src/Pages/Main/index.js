import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import colors from '../../Styles/colors'

// import { Container } from './styles';

export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Pagina Main</Text>
        <Text>Agora SIIIIM</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.main,
    alignItems: 'center',
    justifyContent: 'center',
  },
});