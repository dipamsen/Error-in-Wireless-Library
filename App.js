import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

//screens
import TransactionScreen from './screens/transactions'
import SearchScreen from './screens/searchScreen'

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

const AppNav = createBottomTabNavigator(
  {
    transaction: { screen: TransactionScreen },
    search: { screen: SearchScreen }
  },
  {
    defaultNavigationOptions: ({
      navigation
    }) => ({
      tabBarIcon: () => {
        const routeName = navigation.state.routeName;
        if (routeName == "transaction") {
          return (
            <Image source={require('./assets/book.png')}
              style={{ width: 30, height: 30 }} />
          )
        } else if (routeName == "search") {
          return (
            <Image source={require('./assets/searchingbook.png')}
              style={{ width: 30, height: 30 }} />
          )
        }
      }
    })
  }
)

const AppContainer = createAppContainer(AppNav);


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0c0c0c',
  },
});
