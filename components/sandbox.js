/*
 * @Author: qian tang
 * @Date: 2021-12-30 20:53:41
 * @LastEditTime: 2021-12-31 14:05:36
 * @LastEditors: qian tang
 * @Description:
 * @FilePath: \review-app-react-native\components\sandbox.js
 * All rights reserved
 */

import { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default function SandBox() {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>one</Text>
      <Text style={styles.boxTwo}>two</Text>
      <Text style={styles.boxThree}>three</Text>
      <Text style={styles.boxFour}>four</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#ddd',
  },
  boxOne: {
    backgroundColor: 'violet',
    padding: 10,
  },
  boxTwo: {
    backgroundColor: 'gold',
    padding: 10,
  },
  boxThree: {
    backgroundColor: 'coral',
    padding: 10,
  },
  boxFour: {
    backgroundColor: 'skyblue',
    padding: 10,
  },
})
