import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    // setCourseGoals([...courseGoals, enteredGoal]);
    setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
    setEnteredGoal('')
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Course Goal'
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button onPress={addGoalHandler} title='Add'/>
      </View>
      <FlatList
        data={courseGoals}
        renderItem={itemData => (
          <View style={styles.listItem}>
            <Text>{itemData.item}</Text>
          </View>
        )}
      
      />
        {/* {
          courseGoals.map((goal, i) => <View key={i} style={styles.listItem}><Text>{goal}</Text></View>)
        } */}
      {/* <View
        style={{
          backgroundColor: 'red',
          // width: 100,
          // height: 100,
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1
        }}
      >
        <Text>1</Text>
      </View>
      <View
        style={{
          backgroundColor: 'blue',
          // width: 100,
          // height: 100,
          justifyContent: 'center',
          alignItems: 'center',
          flex: 3
        }}
      >
        <Text>2</Text>
      </View>
      <View
        style={{
          backgroundColor: 'green',
          // width: 100,
          // height: 100,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>3</Text>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    // flexDirection: 'row',
    // width: '80%',
    // height: 300,
    // justifyContent: 'space-around',
    // alignItems: 'stretch'
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textInput: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '80%'
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});
