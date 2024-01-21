import { useState } from "react";
import { IconButton } from "react-native-paper";
import { ContainerInput, TaskInput } from "../ToDoForm/ToDoForm.styles";

export default function ToDoForm({ handleAddTask }) {
  const [text, setText] = useState("");

  const addHandler = (text: string) => {
    if (text === "") {
      return;
    }
    handleAddTask(text);
    setText("");
  };

  return (
    <ContainerInput>
      <TaskInput value={text} onChangeText={setText} placeholder="Enter task" />
      <IconButton
        icon="plus-box"
        iconColor="#ff335f"
        size={50}
        onPress={() => addHandler(text)}
      />
    </ContainerInput>
  );
}
