import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

function TodoItem({item, onToggle, onRemove}) {
  return (
    <TouchableOpacity
      style={[styles.container, item.isDone && {backgroundColor: '#c0cfff'}]}
      onPress={() => onToggle(item.id)}
      onLongPress={() => onRemove(item.id)}>
      <Text
        style={[
          styles.title,
          item.isDone && {textDecorationLine: 'line-through'},
        ]}>
        {item.text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5870cb',
    margin: 10,
    padding: 15,
    borderRadius: 10,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export {TodoItem};