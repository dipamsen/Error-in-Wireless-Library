import React from 'react';
import { View, Text, StyleSheet } from 'react-native';



export default class SearchScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Search Book....</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#0c0c0c'
  },
})