import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = goalTitle => {
    // setCourseGoals([...courseGoals, enteredGoal]);
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    })
  }

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            title={itemData.item.value}
            // onDelete={removeGoalHandler.bind(this, itemData.item.id)}
            onDelete={removeGoalHandler}
            id={itemData.item.id}
          />
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
  }
});
