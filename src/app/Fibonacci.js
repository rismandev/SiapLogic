import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import CustomHeader from '../components/CustomHeader'
import CustomTextInput from '../components/CustomTextInput'
import CustomButton from '../components/CustomButton'

class Fibonacci extends Component {

  state = {
    number : null
  }

  render() {
    return(
      <View style={styles.container}>
        {/* Using Component Header */}
        <CustomHeader
          title="Bilangan Fibonacci"
        />

        {/* Using Component TextInput */}
        <CustomTextInput
          type="numeric"
          placeholder="Masukan Bilangan"
          value={this.state.number}
          onChangeText={(number) => this.setState({ number })}
        />

        {/* Using Component Button */}
        <CustomButton
          text="Cek Nomor"
          background="#3f68f9"
          color="#fafafa"
          uppercase={true}
          onPress={() => alert(`Bilangan : ${this.state.number}`)}
        />

      </View>
    )
  }
}

export default Fibonacci;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
