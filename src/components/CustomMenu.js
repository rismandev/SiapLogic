import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

export default CustomMenu = (props) => {
  return(
    <TouchableOpacity style={[styles.Button, { backgroundColor: props.background}]} onPress={props.onPress}>
      <View style={styles.ButtonContainer}>
        <Text style={styles.ButtonText}>{props.TextMenu}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  Button: {
    width: '80%',
    minHeight: 50,
    paddingVertical: 12,
    marginVertical: 8,
    borderRadius: 6,
    shadowColor: '#181818',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: .18,
    shadowRadius: 2.25,
    elevation: 2.5
  },
  ButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  ButtonText: {
    fontSize: 16,
    fontFamily: 'monospace',
    textTransform: 'capitalize'
  }
})
