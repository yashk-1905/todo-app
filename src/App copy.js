import TodoHeading from "./components/TodoHeading"
import './App.css';
import AddTodo from "./components/AddTodo";
import Container from "./components/Container";
import { useState } from "react";
import AddItem from "./components/AddItem";
import Welcome from "./components/Welcome";
import { FinalArrayContext } from "./store/final-array-store";

function App() {
  
  let initialArr = [];
  let [finalArr, setFinalArr] = useState(initialArr);
  
  let addItem = (todoName, todoDate) => {
    console.log(`name is ${todoName} date is ${todoDate}`);
    setFinalArr((currentArr) => [...currentArr, { tname: todoName, tdate: todoDate }]);
  }
  
  let deleteItem = (y) => {
    console.log(y);
    setFinalArr(finalArr.filter((x) => x.tname !== y))
  }

  return (
    <section className="todo">
      <FinalArrayContext.Provider
        /**always define value as object */
        value={ 
          {
            finalArr,
            addItem,
            deleteItem,
          }
        }
      >
        <Container>
          <TodoHeading></TodoHeading>
          <AddTodo></AddTodo>
          <Welcome></Welcome>
          <AddItem></AddItem>
        </Container>
      </FinalArrayContext.Provider>
    </section>
  );
}

export default App;
