import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native";
import { AntDesign } from '@expo/vector-icons'; // Import AntDesign icons

function TodoScreen() {
  const [todo, setTodo] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTodo = () => {
    if (todo.trim() !== "") {
      setTasks([...tasks, todo]);
      setTodo(""); // Clear input field after adding task
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const renderItem = ({ item, index }) => (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 6,
        marginBottom: 10,
        justifyContent: 'space-between',
      }}
    >
      <Text>{index + 1}. {item}</Text>
      <TouchableOpacity onPress={() => handleDeleteTodo(index)}>
        <AntDesign name="delete" size={20} color="red" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ marginHorizontal: 16, marginVertical: 40 }}>
      <TextInput
        style={{
          borderWidth: 2,
          borderColor: "black",
          borderRadius: 6,
          paddingVertical: 8,
          paddingHorizontal: 16,
          marginBottom: 20,
        }}
        placeholder="Write a text"
        value={todo}
        onChangeText={(text) => setTodo(text)}
      />
      <TouchableOpacity
        style={{
          backgroundColor: "blue",
          paddingVertical: 12,
          borderRadius: 6,
          alignItems: 'center',
          marginBottom: 20,
        }}
        onPress={handleAddTodo}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          Add Task
        </Text>
      </TouchableOpacity>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

export default TodoScreen;
