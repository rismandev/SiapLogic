import React from 'react'
import { Text, StyleSheet } from 'react-native'

export default CustomHeader = (props) => {
  return (
    <Text style={styles.title}>
      {props.title}
    </Text>
  )
}

const styles = StyleSheet.create({
  title: {
    marginVertical: 12,
    fontSize: 26,
    fontFamily: 'monospace',
    textTransform: 'uppercase'
  }
})
