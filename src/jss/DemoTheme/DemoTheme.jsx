import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
export default function DemoTheme() {
  // usf
  const configDarkTheme = {
    backGround: "blue",
    color: "red",
    fontSize: "20px",
    fontWeight: "bold",
  };
  const configLightTheme = {
    backGround: "#fff",
    color: "#000",
  };
  const DivStyle = styled.div`
    color: ${(props) => props.theme.color};
    padding: 5%;
    background-color: ${(props) => props.theme.backGround};
  `;
  const [theme, setTheme] = useState(configDarkTheme);

  let changeTheme = (event) => {
    setTheme(event.target.value === "1" ? configDarkTheme : configLightTheme);
  };
  return (
    <ThemeProvider theme={theme}>
      <DivStyle>xin chao tat ca cac ban nha</DivStyle>
      <select onChange={changeTheme} name="changeTheme">
        <option value="1">blue theme</option>
        <option value="2">black theme</option>
      </select>
    </ThemeProvider>
  );
}
