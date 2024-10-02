import React from "react";
import { useState } from "react";
import { Container } from "../Components/Container";
import { ThemeProvider } from "styled-components";
import { ToDoListDarkTheme } from "../Theme/ToDoListDarkTheme";
import { ToDoListLightTheme } from "../Theme/ToDoListLightTheme";
import { ToDoListPrimaryTheme } from "../Theme/ToDoListPrimaryTheme";
export default function ToDoList() {
  const [theme, setTheme] = useState(ToDoListDarkTheme);
  //   let changeTheme = (event) => {
  //     let themeNe = "";
  //     let value = event.target.value;
  //     if (value == "1") {
  //       themeNe = ToDoListDarkTheme;
  //     } else if (value == "2") {
  //       themeNe = ToDoListPrimaryTheme;
  //     } else {
  //       themeNe = ToDoListLightTheme;
  //     }
  //     setTheme(themeNe);
  //   };
  return (
    <ThemeProvider theme={theme}>
      <Container className="w-50">ToDoList</Container>
      {/* <select onChange={changeTheme} name="" id="">
        <option value="1">Default theme</option>
        <option value="2">Dark theme</option>
        <option value="3">Light theme</option>
      </select> */}
    </ThemeProvider>
  );
}
