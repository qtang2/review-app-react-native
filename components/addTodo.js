/*
 * @Author: qian tang
 * @Date: 2021-12-30 22:08:09
 * @LastEditTime: 2021-12-30 22:23:50
 * @LastEditors: qian tang
 * @Description:
 * @FilePath: \review-app-react-native\components\addTodo.js
 * All rights reserved
 */

/*
 * @Author: qian tang
 * @Date: 2021-12-30 21:54:49
 * @LastEditTime: 2021-12-30 22:05:57
 * @LastEditors: qian tang
 * @Description:
 * @FilePath: \review-app-react-native\components\todoItem.js
 * All rights reserved
 */

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
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'

export default function AddTodo({ handleSubmit }) {
  const [text, setText] = useState('')
  const handleChange = (val) => {
    setText(val)
  }

  return (
    <View onPress={() => handlePress(item.key)}>
      <TextInput
        style={styles.input}
        placeholder='new todo...'
        onChangeText={handleChange}
      />
      <Button
        onPress={() => handleSubmit(text)}
        title='add todo'
        color='coral'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 10,
    marginBottom: 10,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
  },
})
