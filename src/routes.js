import React from 'react'
import { Button } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'

import MainPage from './Pages/Main'
import colors from './Styles/colors'

const RootStack = createStackNavigator({
  Main: {
    screen: MainPage,
    navigationOptions: {
      headerTitle: "Home"
    }
  }
}, {
  initialRouteName: 'Main',
  navigationOptions: {
    headerTintColor: colors.main,
    headerStyle: {
      backgroundColor: '#FFF'
    },
    headerLeft: (<Button title='..' color={colors.main} />)
  }
})

export default createAppContainer(RootStack);
/*
export default class App extends React.Component {
  render() {
    return <AppContainer style={{flex: 1, backgroundColor: 'red'}} />;
  }
}
*/