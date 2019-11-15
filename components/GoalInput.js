import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Modal } from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  }

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Course Goal'
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title='Cancel' color='red' onPress={props.onCancel} />
        <Button
          // onPress={props.onAddGoal.bind(this, enteredGoal)}
          onPress={addGoalHandler}
          title='Add'
        />
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '80%',
    borderColor: 'black',
    // borderWidth: 10,
    marginBottom: 10
  }
})

export default GoalInput;
