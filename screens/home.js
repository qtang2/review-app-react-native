/*
 * @Author: qian tang
 * @Date: 2021-12-31 14:38:44
 * @LastEditTime: 2021-12-31 16:44:12
 * @LastEditors: qian tang
 * @Description:
 * @FilePath: \review-app-react-native\screens\home.js
 * All rights reserved
 */

import React from 'react'
import { View, Text } from 'react-native'
import globalStyles from '../styles/global'

export default function Home() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Page</Text>
    </View>
  )
}
