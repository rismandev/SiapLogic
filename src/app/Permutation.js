import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import CustomHeader from '../components/CustomHeader'
import CustomTextInput from '../components/CustomTextInput'
import CustomButton from '../components/CustomButton'

class Permutation extends Component {

  state = {
    input: {
      first : null,
      second : null
    },
    result : null
  }

  handleChangeText = (number, key) => {

    if(key == 1){
      this.setState({
        input : {...this.state.input, first : number}
      })
    }else {
      this.setState({
        input : {...this.state.input, second : number}
      })
    }

  }

  handleButton = async() => {

    const { first, second } = this.state.input

    let result;
    if(first && second ) {

      alert(`Bilangan n = ${first}, Bilangan r = ${second}`)

    }else {
      alert('Silahkan input bilangan pertama dan kedua')
    }

  }

  render() {

    const { result } = this.state

    return(
      <View style={styles.container}>
        {/* Using Component Header */}
        <CustomHeader
          title="Permutation"
        />

        {/* Using Component TextInput */}
        <CustomTextInput
          placeholder="Masukan bilangan n"
          onChangeText={(text) => this.handleChangeText(text, 1)}
          type="numeric"
          value={this.state.input.first}
        />

        <CustomTextInput
          placeholder="Masukan bilangan r"
          onChangeText={(text) => this.handleChangeText(text, 2)}
          type="numeric"
          value={this.state.input.second}
        />

        {/* Using Component Button */}
        <CustomButton
          onPress={this.handleButton}
          background="#f54343"
          color="#fdfcff"
          text="Cek Hasil"
          uppercase={true}
        />

        {
          result ?
          <Text style={styles.result}> {result} </Text>
          :
          <Text style={styles.result}> Hasil Permutasi </Text>
        }
      </View>
    )
  }
}

export default Permutation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  result : {
    marginTop: 10
  }
})
