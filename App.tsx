import { useState } from "react";
import { Keyboard, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Header from "./src/components/Header/Header";
import ToDoForm from "./src/components/ToDoForm/ToDoForm";
import ToDoList from "./src/components/ToDoList/ToDoList";

export interface Task {
  id: number;
  title: string;
}

export default function App() {
  const [toDoList, setToDoList] = useState([]);
  const [count, setCount] = useState(1);

  const handleAddTask = (text: string) => {
    Keyboard.dismiss();
    setToDoList([...toDoList, { id: count, title: text }]);
    setCount(count + 1);
  };

  const handleDeleteTask = (id: number) => {
    const updatedTodoList = toDoList.filter((item) => item.id !== id);
    setToDoList(updatedTodoList);
  };

  const handleUpdateTodo = (item: Task) => {
    Keyboard.dismiss();
    setToDoList(
      toDoList.map((el) => {
        if (el.id === item.id) {
          return { ...el, title: item.title };
        }
        return el;
      })
    );
  };

  return (
    <View>
      <Header />
      <ToDoForm handleAddTask={handleAddTask} />
      <ToDoList
        toDoList={toDoList}
        handleUpdateTodo={handleUpdateTodo}
        handleDeleteTask={handleDeleteTask}
      />
      <StatusBar style="auto" />
    </View>
  );
}
