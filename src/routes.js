import React, { Component } from 'react'
import { Dimensions } from 'react-native'
import { createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation'

import styleColor from '$src/Styles/colors'
import MainScreen from '$src/Screens/Main'
import FixContentScreen from '$src/Screens/Content'
import DinamicContentScreen from '$src/Screens/DinamicContent'
import SideMenu from '$src/Navigations/SideMenu'

const RootStack = createStackNavigator({
  Main: {
    screen: MainScreen,
    navigationOptions: {
      headerTitle: "Home"
    }
  },
  Screen2: FixContentScreen,
  ScreenDinamic: DinamicContentScreen
}, {
  initialRouteName: 'Main',
  headerLayoutPreset: 'center',
  defaultNavigationOptions: {
    headerTintColor: colors.main,
    headerTitleStyle: {
      fontWeight: 'normal',
    },
    headerStyle: {
      backgroundColor: styleColor.background,
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