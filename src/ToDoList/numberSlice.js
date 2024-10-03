import { createSlice } from "@reduxjs/toolkit";
import { ToDoListDarkTheme } from "../Theme/ToDoListDarkTheme";
import { ToDoListLightTheme } from "../Theme/ToDoListLightTheme";
import { ToDoListPrimaryTheme } from "../Theme/ToDoListPrimaryTheme";
import { message } from "antd";
const initialState = {
  themeToDoList: ToDoListDarkTheme,
  inputToDo: "",
  taskToDo: [],
  taskCompleted: [],
  storeIndex: 0,
};

const numberSlice = createSlice({
  name: "numberSlice",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      if (action.payload === "1") {
        state.themeToDoList = ToDoListDarkTheme;
      } else if (action.payload === "2") {
        state.themeToDoList = ToDoListLightTheme;
      } else {
        console.log("trang");
        state.themeToDoList = ToDoListPrimaryTheme;
      }
    },
    changeInput: (state, action) => {
      state.inputToDo = action.payload;
      console.log(action.payload);
    },
    handleAddTask: (state) => {
      let textField = state.inputToDo;
      let taskToDo = state.taskToDo;
      if (textField.length === 0) {
        message.info("You have to type task name");
      } else {
        taskToDo.push(textField);
        state.inputToDo = "";
      }
    },
    handleEdit: (state, action) => {
      let index = action.payload;
      let input = state.inputToDo;
      let Task = state.taskToDo;
      state.storeIndex = index;
      state.inputToDo = Task[index];
    },
    handleUpdate: (state) => {
      let indexStore = state.storeIndex;
      let change = state.taskToDo;
      if (state.inputToDo.length === 0) {
        message.info("You have to type task name");
      } else {
        change[indexStore] = state.inputToDo;

        state.inputToDo = "";
      }
    },
    handleDelete: (state, action) => {
      console.log(action.payload);
      state.taskToDo.splice(action.payload, 1);
    },
    handleComplete: (state, action) => {
      state.storeIndex = action.payload;
      let index = state.storeIndex;
      let toDo = state.taskToDo;
      let valueToDo = toDo[index];
      let completeValue = state.taskCompleted;
      completeValue.push(valueToDo);
      state.taskToDo.splice(action.payload, 1);
    },
    handleDeleteCompleted: (state, action) => {
      state.taskCompleted.splice(action.payload, 1);
    },
    //   nơi update logic thayy đổi state
  },
});
export const {
  changeTheme,
  changeInput,
  handleAddTask,
  handleEdit,
  handleUpdate,
  handleDelete,
  handleDeleteCompleted,
  handleComplete,
} = numberSlice.actions; //action

export default numberSlice.reducer; // tên reducer
