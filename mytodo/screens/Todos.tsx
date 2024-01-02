import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Dates from './dates'
let height = Dimensions.get('screen').height
let width = Dimensions.get('screen').width
const Todos = () => {

  return (
    <View style={styles.todoContainer}>
      <Dates/>
      <TouchableOpacity activeOpacity={0.6} style={styles.addButtonContainer}>
        <Image source={require('../assets/images/add.png')} style={styles.addButton} />
      </TouchableOpacity>
    </View>
  )
}

export default Todos

const styles = StyleSheet.create({
  todoContainer: {
    flex: 1,
    backgroundColor: '#28b7b7',
  },
  addButtonContainer: {
    position: 'absolute',
    bottom: 40,
    right: 40,
    height: 60,
    width: 60,
    borderRadius: 10,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButton: {
    tintColor:'white'
  },
});