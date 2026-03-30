/*
import React, { useState } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
} from 'react-native';
import { Input, Button, Text } from '@rneui/themed';
import TaskItem from './components/TaskItem';

export default function App() {
  const [tasks, setTasks] = useState([
    { key: '1', description: 'Finish homework', completed: true },
    { key: '2', description: 'Do Laundry', completed: false },
    { key: '3', description: 'Go to gym', completed: false },
  ]);

  const [taskText, setTaskText] = useState('');

  const addTask = () => {
    const trimmed = taskText.trim();
    if (trimmed === '') return;

    const newTask = {
      key: Date.now().toString(),
      description: trimmed,
      completed: false,
    };

    setTasks((prev) => [...prev, newTask]);
    setTaskText('');
  };

  const toggleTask = (taskKey) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.key === taskKey
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text h3 style={styles.title}>
        Todo List
      </Text>

      <View style={styles.inputRow}>
        <View style={{ flex: 1 }}>
          <Input
            placeholder="Enter a task"
            value={taskText}
            onChangeText={setTaskText}
            onSubmitEditing={addTask}
          />
        </View>

        <Button
          title="Add"
          onPress={addTask}
          containerStyle={styles.button}
        />
      </View>

      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TaskItem task={item} onToggle={toggleTask} />
        )}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    width: 80,
    marginLeft: 10,
    marginBottom: 25,
  },
});
*/
import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Input, Button, Text } from '@rneui/themed';
import TaskItem from './components/TaskItem';

export default function App() {
  const [tasks, setTasks] = useState([
    { key: '1', description: 'Finish homework', completed: false },
    { key: '2', description: 'Watch a Movie', completed: false },
    { key: '3', description: 'Do Laundry', completed: false },
  ]);

  const [taskText, setTaskText] = useState('');

  const addTask = () => {
    const trimmed = taskText.trim();
    if (trimmed === '') return;

    const newTask = {
      key: Date.now().toString(),
      description: trimmed,
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setTaskText('');
  };

  const toggleTask = (taskKey) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.key === taskKey
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text h3 style={styles.title}>
        What to do?
      </Text>

      <View style={styles.inputRow}>
        <View style={styles.inputWrapper}>
          <Input
            placeholder="Add a task"
            value={taskText}
            onChangeText={setTaskText}
            onSubmitEditing={addTask}
          />
        </View>

        <Button
          title="Done"
          onPress={addTask}
          containerStyle={styles.buttonContainer}
          color='#29ba50'
        />
      </View>

      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TaskItem task={item} onToggle={toggleTask} />
        )}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 15,
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputWrapper: {
    flex: 1,
  },
  buttonContainer: {
    width: 60,
    marginLeft: 10,
    marginBottom: 25,
  },
});