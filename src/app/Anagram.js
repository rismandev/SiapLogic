import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

// Using Component
import CustomHeader from '../components/CustomHeader'
import CustomTextInput from '../components/CustomTextInput'
import CustomButton from '../components/CustomButton'

class Anagram extends Component {

  state = {
    input: {
      first: null,
      second: null,
    },
    value: {
      first: null,
      second: null,
    },
    result: null
  }

  // Handling Value TextInput
  // Save value to State
  handleTextInput = (key, value) => {

    value = value.toLowerCase()

    if(key == 1){
      this.setState({
        input: {...this.state.input, first : value}
      })
    } else {
      this.setState({
        input: {...this.state.input, second : value}
      })
    }

  }

  handleValue = (key, value) => {

    value = value.toLowerCase()

    if(key == 1){
      this.setState({
        value: {...this.state.value, first : value}
      })
    } else {
      this.setState({
        value: {...this.state.value, second : value}
      })
    }

  }

  // Handling Click Button
  handleButton = async() => {

    const { first, second } = this.state.input

    if(first && second){
      await this.reverseString(first, 1)

      await this.reverseString(second, 2)

      if(this.state.value.first == first && this.state.value.second == second){
        await this.setState({
          result: 'Bilangan 1 dan 2 Anagram'
        })
      } else if(this.state.value.first == first){
        await this.setState({
          result: 'Bilangan 1 Anagram, Bilangan 2 Bukan Anagram'
        })
      } else if(this.state.value.second == second){
        await this.setState({
          result: 'Bilangan 1 Bukan Anagram, Bilangan 2 Anagram'
        })
      } else {
        await this.setState({
          result: null
        })
      }

    }else {
      alert('Silahkan input kata pertama dan kedua')
    }

  }

  reverseString = (value, key) => {

    let length = value.length
    let text = ""
    let i
    for(i = 0; i <= length; i++)

    text = value.substring(i, i+1) + text;

    this.handleValue(key, text)

  }

  render() {

    const { result } = this.state

    return(
      <View style={styles.container}>
        {/* Title */}
        <CustomHeader
          title="Cek Kata Anagram"
        />

        {/* Using Component TextInput */}
        <CustomTextInput
          onChangeText={(text) => this.handleTextInput(1, text)}
          value={this.state.input.first}
          placeholder="Masukan kata pertama"
        />
        <CustomTextInput
          onChangeText={(text) => this.handleTextInput(2, text)}
          value={this.state.input.second}
          placeholder="Masukan kata kedua"
        />

        {/* Using Component Button */}
        <CustomButton
          background="#3176fc"
          color="#ffffff"
          text="Cek Kata"
          onPress={this.handleButton}
          uppercase={true}
        />

        {
          result ?
          <Text style={styles.result}>{result}</Text>
          :
          <Text style={styles.result}>Hasil perubahan kata</Text>
        }

      </View>
    )
  }
}

export default Anagram;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  result: {
    marginTop: 10
  }
})
