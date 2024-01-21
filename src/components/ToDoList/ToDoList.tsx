import React from "react";
import { FlatList } from "react-native";
import ToDoItem from "../ToDoItem/ToDoItem";
import { Task } from "../../../App";
import { ContainerList } from "../ToDoList/ToDoList.styles";

interface Props {
  toDoList: Task[];
  handleUpdateTodo: (item: Task) => void;
  handleDeleteTask: (item: number) => void;
}

export default function ToDoList({
  toDoList,
  handleUpdateTodo,
  handleDeleteTask,
}: Props) {
  return (
    <ContainerList>
      <FlatList
        data={toDoList}
        renderItem={({ item }) => (
          <ToDoItem
            item={item}
            handleUpdateTodo={handleUpdateTodo}
            handleDeleteTask={handleDeleteTask}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        scrollEnabled={true}
      />
    </ContainerList>
  );
}
