import { createSlice } from "@reduxjs/toolkit";
import { ToDoListDarkTheme } from "../Theme/ToDoListDarkTheme";
import { ToDoListLightTheme } from "../Theme/ToDoListLightTheme";
import { ToDoListPrimaryTheme } from "../Theme/ToDoListPrimaryTheme";
const initialState = {
  themeToDoList: ToDoListDarkTheme,
  inputToDo: "",
  taskToDo: [],
  storeIndex: 0,
  focus: false,
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
        alert("You have to type task name");
      } else {
        taskToDo.push(textField);
        state.inputToDo = "";
      }
    },
    handleEdit: (state, action) => {
      state.storeIndex = action.payload;
      state.focus = true;
    },
    handleUpdate: (state) => {
      let indexStore = state.storeIndex;
      let change = state.taskToDo;
      if (state.inputToDo.length === 0) {
        alert("You have to type task name");
      } else {
        change[indexStore] = state.inputToDo;
        state.focus = false;

        state.inputToDo = "";
      }
    },
    handleDelete: (state, action) => {
      console.log(action.payload);
      state.taskToDo.splice(action.payload, 1);
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
} = numberSlice.actions; //action

export default numberSlice.reducer; // tên reducer
