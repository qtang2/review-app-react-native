/*
 * @Author: qian tang
 * @Date: 2021-12-31 14:38:48
 * @LastEditTime: 2022-01-04 14:20:22
 * @LastEditors: qian tang
 * @Description:
 * @FilePath: \review-app-react-native\screens\about.js
 * All rights reserved
 */
import React from 'react'
import { View, Text } from 'react-native'
import globalStyles from '../styles/global'

export default function About() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>About Page</Text>
    </View>
  )
}
