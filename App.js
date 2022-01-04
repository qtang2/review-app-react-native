/*
 * @Author: qian tang
 * @Date: 2021-12-30 19:12:42
 * @LastEditTime: 2021-12-31 16:35:05
 * @LastEditors: qian tang
 * @Description:
 * @FilePath: \review-app-react-native\App.js
 * All rights reserved
 */
import React, { useState } from 'react'
import { Text } from 'react-native'
import Home from './screens/home'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'

const getFonts = () => {
  const result = Font.loadAsync({
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  })

  return result
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  if (fontsLoaded) {
    return <Home />
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onError={() => console.log('app loading error')}
        onFinish={() => setFontsLoaded(true)}
      />
    )
  }
}
