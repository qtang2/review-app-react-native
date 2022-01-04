/*
 * @Author: qian tang
 * @Date: 2021-12-30 20:53:41
 * @LastEditTime: 2021-12-31 14:20:41
 * @LastEditors: qian tang
 * @Description:
 * @FilePath: \review-app-react-native\components\todoItem.js
 * All rights reserved
 */

import { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export default function TodoItem({ item, handlePress }) {
  return (
    <TouchableOpacity onPress={() => handlePress(item.key)}>
      <View style={styles.item}>
        <MaterialIcons name='delete' size={18} color='#333' />
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderStyle: 'dashed',
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
  },
  itemText: {
    marginLeft: 10,
  },
})
