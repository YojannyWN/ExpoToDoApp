import React from 'react';
import { View, StyleSheet } from 'react-native';
import { CheckBox, Text } from '@rneui/themed';

export default function TaskItem({ task, onToggle }) {
  return (
    <View style={styles.row}>
      <CheckBox
        checked={task.completed}
        onPress={() => onToggle(task.key)}
        containerStyle={styles.checkbox}
        
      />

      <Text
        style={[
          styles.text,
          task.completed && {
            textDecorationLine: 'line-through',
            textDecorationStyle: 'solid',
          },
        ]}
      >
        {task.description}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  checkbox: {
    margin: 0,
    padding: 0,
    marginRight: 10,
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  text: {
    fontSize: 18,
    flex: 1,
  },
});