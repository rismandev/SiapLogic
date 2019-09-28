import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export default CustomTextInput = (props) => {
  return(
    <TouchableOpacity onPress={props.onPress} style={[styles.Button, {backgroundColor: props.background}]}>
      <Text style={{color: props.color, textTransform: props.uppercase ? 'uppercase' : 'capitalize'}}>{props.text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  Button: {
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
