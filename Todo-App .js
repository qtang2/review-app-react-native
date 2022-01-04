/*
 * @Author: qian tang
 * @Date: 2021-12-30 19:12:42
 * @LastEditTime: 2021-12-31 15:21:57
 * @LastEditors: qian tang
 * @Description:
 * @FilePath: \review-app-react-native\Todo-App .js
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
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
import AddTodo from './components/addTodo'
import Header from './components/header'
import SandBox from './components/sandbox'
import TodoItem from './components/todoItem'

export default function TodoApp() {
  // const [people, setPeople] = useState([
  //   { name: 'shaun', id: '1' },
  //   { name: 'yoshi', id: '2' },
  //   { name: 'mario', id: '3' },
  //   { name: 'luigi', id: '4' },
  //   { name: 'peach', id: '5' },
  //   { name: 'toad', id: '6' },
  //   { name: 'bowser', id: '7' },
  // ])

  // const handlePress = (id) => {
  //   console.log('id===> ', id)

  //   setPeople((prevPeople) => prevPeople.filter((person) => person.id != id))
  // }

  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' },
  ])

  const handlePress = (key) => {
    console.log('key ===> ', key)
    setTodos((prevTodos) => {
      return prevTodos.filter((item) => item.key != key)
    })
  }

  const handleSubmit = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodos]
      })
    } else {
      Alert.alert('OOPS!', 'Todo must be over 3 chars', [
        { text: 'Understood', onPress: () => console.log('alert closed') },
      ])
    }
  }

  return (
    // <SandBox />
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss()
        console.log('dismiss keyboard')
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          {/* form */}
          <AddTodo handleSubmit={handleSubmit} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} handlePress={handlePress} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingTop: 40,
    // paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
})
