import { useState } from "react"

function App() {
  const [toDos, setToDos] = useState([
    "coding", "reading"
  ]);
  
  return (
    <>
    <Header />
    <Adder toDos={toDos} setToDos={setToDos}/>
    <ToDoList toDos={toDos} />
    </>
  );
};


const Adder = (props) => {
  const [newToDo, setNewToDo] = useState("") 
  const {toDos, setToDos} = props;

  const submitHandler = (e) => {e.preventDefault()
      setToDos([...toDos, newToDo])
      console.log(newToDo, "<< ON CLICK")}
  
  console.log(toDos, "<< ADDED!")

  return (
    <>
    <form>
      <label for="todo">Add a new TODO</label>
      <input type="text" name="todo" id="todo" value={newToDo} onChange={(e) => setNewToDo(e.target.value)}></input>
      <button onClick={submitHandler} type="submit">Send</button>
    </form>
    </>
  );
};

const Header = () => {
      return <h1>Alex's To Do List</h1>
  };

  const ToDoList = (props) => {
    return (
    <div>
    <ul>
      {props.toDos.map((toDo) => {
        return <li key={toDo}>{toDo}</li>
      })}
    </ul>
    </div>
    );
  };



export default App;
