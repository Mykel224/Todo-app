import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native";

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

  return (
    <View style={{ marginHorizontal: 16, marginVertical: 40 }}>
      <TextInput
        style={{
          borderWidth: 2,
          borderColor: "black",
          borderRadius: 6,
          paddingVertical: 8,
          paddingHorizontal: 16,
        }}
        placeholder="Add a task"
        value={todo}
        onChangeText={(text) => setTodo(text)}
      />
      <TouchableOpacity
        style={{
          backgroundColor: "black",
          paddingVertical: 12,
          marginVertical: 20,
          borderRadius: 6,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.5,
          shadowRadius: 3,
        }}
        onPress={handleAddTodo}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 20,
            textAlign: "center",
          }}
        >
          Add
        </Text>
      </TouchableOpacity>
      <FlatList
        data={tasks}
        renderItem={({ item, index }) => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 10,
              borderWidth: 1,
              borderColor: '#ccc',
              borderRadius: 6,
              marginBottom: 10,
            }}
          >
            <Text>{item}</Text>
            <TouchableOpacity
              onPress={() => handleDeleteTodo(index)}
            >
              <Text style={{ color: 'red', marginLeft: 10 }}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

export default TodoScreen;
