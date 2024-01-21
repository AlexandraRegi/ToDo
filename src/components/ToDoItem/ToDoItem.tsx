import React, { useState } from "react";
import { Checkbox, IconButton } from "react-native-paper";
import { Task } from "../../../App";
import { TaskItem, Title } from "./ToDoItem.styles";

interface Props {
  item: Task;
  handleUpdateTodo: (item: Task) => void;
  handleDeleteTask: (item: number) => void;
}

export default function ToDoItem({
  item,
  handleUpdateTodo,
  handleDeleteTask,
}: Props) {
  const [editedTodo, setEditedTodo] = useState(null);
  const [checked, setChecked] = useState(false);

  const updateHandler = (item: Task) => {
    handleUpdateTodo({ id: item.id, title: editedTodo });
  };

  return (
    <TaskItem>
      <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
          }}
          color="#ff335f"
          uncheckedColor="#ff335f"
        />
      <Title
        value={editedTodo ? editedTodo : item.title}
        onChangeText={setEditedTodo}
      />
      <IconButton
        icon="notebook-edit-outline"
        iconColor="#ff335f"
        size={30}
        onPress={() => updateHandler(item)}
      />
      <IconButton
        icon="book-remove-outline"
        iconColor="#ff335f"
        size={30}
        onPress={() => handleDeleteTask(item.id)}
      />
    </TaskItem>
  );
}
