import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import colors from '../../Styles/colors'

export default class Main extends Component {
  static navigationOptions = ({ navigation }) => {
    const title = navigation.getParam('title', 'Content Default');
    return {
      title,
    };
  };

  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('id', false);

    return (
      <View style={styles.container}>
        <Text>Pagina Content {itemId}</Text>
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
  text: {
    fontSize: 24,
    color: colors.main
  }
});