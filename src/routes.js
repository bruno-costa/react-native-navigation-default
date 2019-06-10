import React, { Component } from 'react'
import { Dimensions } from 'react-native'
import { createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation'

import MainPage from './Pages/Main'
import ContentPage from './Pages/Content'
import colors from './Styles/colors'
import SideMenu from './SideMenu'

const RootStack = createStackNavigator({
  Main: {
    screen: MainPage,
    navigationOptions: {
      headerTitle: "Home"
    }
  },
  Content: ContentPage,
  Content2: ContentPage
}, {
  initialRouteName: 'Main',
  headerLayoutPreset: 'center',
  defaultNavigationOptions: {
    headerTintColor: colors.main,
    headerTitleStyle: {
      fontWeight: 'normal',
    },
    headerStyle: {
      backgroundColor: '#FFF',
    },
    //headerLeft: (<... />)
  }
})


const AppContainer = createAppContainer(createDrawerNavigator({ RootStack }, {
  drawerWidth: Dimensions.get('window').width - 48,
  contentComponent: SideMenu,
  hideStatusBar: true
}));

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}