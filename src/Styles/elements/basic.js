import { StyleSheet } from 'react-native';

import colors from '$src/Styles/colors'

export default StyleSheet.create({
  containerCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
  h1: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.font
  }
});