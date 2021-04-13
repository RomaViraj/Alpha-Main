import * as React from 'react'
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import {createSwitchNavigator, createAppContainer} from 'react-navigation'
  import Userhome from './Screens/Userhome'
  import UserMenu from './Screens/UserMenu'
import WelcomeScreen from './Screens/WelcomeScreen'
import MentionSalesYK from './Screens/MentionSalesYK'
import UserProducts from './Screens/UserProducts'
import EmployeeSignIn from './Screens/EmployeeSignIn'
import UserAnaecare from './Screens/UserAnaecare'
import UserAlphaShell from './Screens/UserAlphaShell'
import UserAlphaChrom from './Screens/UserAlphaChrom'
import UserAppiplex from './Screens/UserAppiplex'
export default class App extends React.Component{
  render(){
    return(
      
<AppContainer/>
     
    )
  }
}

const AppNavigator = createSwitchNavigator({
  WelcomeScreen:{screen:WelcomeScreen},
Userhome:{screen:Userhome},
UserMenu:{screen:UserMenu},
MentionSalesYK:{screen:MentionSalesYK},
UserProducts:{screen:UserProducts},
EmployeeSignIn:{screen:EmployeeSignIn},
UserAnaecare:{screen:UserAnaecare},
UserAlphaShell:{screen:UserAlphaShell},
UserAlphaChrom:{screen:UserAlphaChrom},
UserAppiplex:{screen:UserAppiplex}
})

const AppContainer = createAppContainer(AppNavigator)