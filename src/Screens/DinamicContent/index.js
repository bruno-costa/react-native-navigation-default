import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from '$src/Styles/elements/basic';

export default class Main extends Component {
  static navigationOptions = ({ navigation }) => {
    const title = navigation.getParam('title', 'Content Default');
    return {
      title,
    };
  };

  render() {
    const { navigation } = this.props;
    const text = navigation.getParam('text', 'Text Default');
    return (
      <View style={styles.containerCenter}>
        <Text style={styles.h1}>
          {text} Content Screen
        </Text>
      </View>
    );
  }
}
