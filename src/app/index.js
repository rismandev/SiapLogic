import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import CustomMenu from '../components/CustomMenu'

class Main extends Component {
  render() {

    const { navigate } = this.props.navigation

    return (
      <View style={styles.container}>
        {/* Header of Application */}
        <Text style={styles.TextHeader}> Frisidea Tech </Text>

        {/* Using Component Menu */}
        <CustomMenu
          onPress={() => navigate('Fibonacci')}
          background='#f5f5f5'
          TextMenu="Bilangan Fibonacci"
        />
        <CustomMenu
          onPress={() => navigate('Anagram')}
          background='#f5f5f5'
          TextMenu="Kata Anagram"
        />
        <CustomMenu
          onPress={() => navigate('Permutation')}
          background='#f5f5f5'
          TextMenu="Permutasi"
        />

      </View>
    )
  }
}

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  TextHeader: {
    marginVertical: 10,
    fontSize: 28,
    fontFamily: 'monospace'
  }
})
