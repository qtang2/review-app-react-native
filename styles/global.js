/*
 * @Author: qian tang
 * @Date: 2021-12-31 16:41:26
 * @LastEditTime: 2021-12-31 16:44:02
 * @LastEditors: qian tang
 * @Description:
 * @FilePath: \review-app-react-native\styles\global.js
 * All rights reserved
 */

import { StyleSheet } from 'react-native'

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  titleText: {
    fontFamily: 'nunito-bold',
    fontSize: 18,
    color: '#333',
  },
  paragraph: {
    marginHorizontal: 8,
    lineHeight: 20,
  },
})

export default globalStyles
