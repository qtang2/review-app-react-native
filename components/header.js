/*
 * @Author: qian tang
 * @Date: 2021-12-30 20:53:41
 * @LastEditTime: 2021-12-30 21:53:53
 * @LastEditors: qian tang
 * @Description:
 * @FilePath: \review-app-react-native\components\header.js
 * All rights reserved
 */

import { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native'

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: 'coral',
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
})
