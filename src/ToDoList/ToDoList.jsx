import { Container } from "../Components/Container";
import { ThemeProvider } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown } from "../Components/Dropdown";
import React, { useRef } from "react";
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
} from "../Components/Heading";
import { TextField } from "../Components/TextField";
import { Button } from "../Components/Button";
import { Table, Tr, Th, Thead } from "../Components/TableNe";
import {
  changeTheme,
  changeInput,
  handleAddTask,
  handleEdit,
  handleUpdate,
  handleDelete,
  handleComplete,
  handleDeleteCompleted,
} from "./numberSlice";

export default function ToDoList() {
  let { themeToDoList, taskToDo, inputToDo, taskCompleted } = useSelector(
    (state) => state.numberSlice
  );
  let dispatch = useDispatch();
  const buttonRef = useRef(null);

  const handleChangeTheme = (event) => {
    dispatch(changeTheme(event.target.value));
  };

  const handleChangeInput = (event) => {
    dispatch(changeInput(event.target.value));
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      // Giả lập click nút "Add task" khi nhấn phím Enter
      buttonRef.current.click();
    }
  };

  const renderTaskToDo = () => {
    return taskToDo.map((item, index) => {
      return (
        <Tr key={index}>
          <Th>Task name: {item}</Th>
          <Th className="text-end">
            <Button
              onClick={() => {
                dispatch(handleEdit(index));
              }}
            >
              <i className="fa fa-edit"></i>
            </Button>
            <Button
              onClick={() => {
                dispatch(handleComplete(index));
              }}
              className="mx-1"
            >
              <i className="fa fa-check"></i>
            </Button>
            <Button
              onClick={() => {
                dispatch(handleDelete(index));
              }}
            >
              <i className="fa fa-trash"></i>
            </Button>
          </Th>
        </Tr>
      );
    });
  };

  const renderCompletedTask = () => {
    return taskCompleted.map((item, index) => {
      return (
        <Tr key={index}>
          <Th>Task name: {item}</Th>
          <Th className="text-end">
            <Button
              onClick={() => {
                dispatch(handleDeleteCompleted(index));
              }}
            >
              <i className="fa fa-trash"></i>
            </Button>
          </Th>
        </Tr>
      );
    });
  };

  return (
    <ThemeProvider theme={themeToDoList}>
      <Container className="w-50">
        <Dropdown onChange={handleChangeTheme} className="text-center">
          <option value="1">Dark theme</option>
          <option value="2">Light theme</option>
          <option value="3">Primary theme</option>
        </Dropdown>
        <Heading2 className="text-center">To Do List</Heading2>
        <TextField
          onKeyDown={handleKeyDown}
          value={inputToDo}
          onChange={handleChangeInput}
          label="Task name "
          className=" w-50"
        ></TextField>
        <Button
          ref={buttonRef}
          onClick={() => {
            dispatch(handleAddTask());
          }}
          className="mx-2"
        >
          <i className="fa fa-plus"></i> Add task
        </Button>
        <Button
          onClick={() => {
            dispatch(handleUpdate());
          }}
        >
          <i className="fa fa-upload me-2"></i>
          Update task
        </Button>
        <hr />
        <Heading3>Task to do</Heading3>
        <Table>
          <Thead>{renderTaskToDo()}</Thead>
        </Table>
        <Heading3 className="my-2">Task completed</Heading3>
        <Table>
          <Thead>{renderCompletedTask()}</Thead>
        </Table>
      </Container>
    </ThemeProvider>
  );
}
