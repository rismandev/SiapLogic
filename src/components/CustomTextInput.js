import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

export default CustomTextInput = (props) => {
  return(
    <TextInput
      onChangeText={props.onChangeText}
      keyboardType={props.type}
      placeholder={props.placeholder}
      style={styles.textInput}
      value={props.value}
    />
  )
}

const styles = StyleSheet.create({
  textInput: {
    width: '80%',
    minHeight: 40,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginVertical: 8,
    borderRadius: 5,
    shadowColor: '#878787',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: .18,
    shadowRadius: 3,
    elevation: 2
  }
})
