import { useState } from "react";

function App() {
  const [toDos, setToDos] = useState(["coding", "reading"]);
  console.log(toDos);
  return (
    <>
      <Header />
      <Adder toDos={toDos} setToDos={setToDos} />
      <ToDoList toDos={toDos} setToDos={setToDos} />
    </>
  );
}

const Adder = (props) => {
  const [newToDo, setNewToDo] = useState("");
  const { toDos, setToDos } = props;

  const submitHandler = (e) => {
    e.preventDefault();
    setToDos([...toDos, newToDo]);
    console.log(newToDo, "<< ON CLICK");
    setNewToDo("");
  };

  console.log(toDos, "<< ADDED!");

  return (
    <>
      <form>
        <label for="todo">Add a new TODO</label>
        <input
          type="text"
          name="todo"
          id="todo"
          value={newToDo}
          onChange={(e) => setNewToDo(e.target.value)}
        ></input>
        <button onClick={submitHandler} type="submit">
          Send
        </button>
      </form>
    </>
  );
};

const Header = () => {
  return <h1>Alex's To Do List</h1>;
};

const ToDoList = (props) => {
  console.log(props);
  const deleteItem = (index) => () => {
    props.setToDos((toDos) =>
      toDos.filter((_, i) => {
        return i !== index;
      })
    );
  };

  return (
    <div>
      <ul>
        {props.toDos.map((toDo, index) => {
          return (
            <li key={toDo}>
              {toDo}
              <button onClick={deleteItem(index)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
