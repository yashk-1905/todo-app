import TodoHeading from "./components/TodoHeading"
import './App.css';
import AddTodo from "./components/AddTodo";
import Container from "./components/Container";
import { useState, useReducer } from "react";
import AddItem from "./components/AddItem";
import Welcome from "./components/Welcome";
import FinalArrayContextProvider, { FinalArrayContext } from "./store/final-array-store";


function App() {
  return (
    <section className="todo">
      <FinalArrayContextProvider>
        <Container>
          <TodoHeading></TodoHeading>
          <AddTodo></AddTodo>
          <Welcome></Welcome>
          <AddItem></AddItem>
        </Container>
      </FinalArrayContextProvider>
    </section>
  );
}

export default App;
