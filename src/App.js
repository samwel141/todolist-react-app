import React from 'react'
// import './App.css';
import {Task} from './Task.js'
// import {Errorboundary} from 'react'

function App() {
  const [inputValue, setInputValue] = React.useState('');
  const [formatedInput, setFormatedInput] = React.useState('');
  const [todoList, setTodoList] = React.useState([]);

  const [fetched, setFetched] = React.useState('');

  React.useEffect(() => {
    fetch("https://catfact.ninja/fact").then((res) => res.json()).then((data) => {
    // console.log(data.fact) 
    setFetched(data.fact)
  }
    ).catch((err) => {console.log(new Error('Err' + err.message))})
  },[todoList])

  console.log(fetched);



  const handleSubmit = () => {
    const task = {
      id:todoList.length ===0 ? 1 : todoList[todoList.length-1].id + 1,
      name:formatedInput,
      completed: false,
    }
    // const newTodos = [...todoList, task]
    setTodoList([...todoList, task])
    setInputValue(' ')
  }
 

  const handleChange = (event) => {
    setInputValue(event.target.value);
    const val = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
    setFormatedInput(val)
  }

  const deletefun = (todo) => {
     setTodoList(todoList.filter((todoName) => todo.id !== todoName.id))
  }

  const handleComplete = (id) => {
   const updateList = todoList.map((todoName) => {
    return id === todoName.id ? {...todoName, completed: true} : todoName;
    })
    setTodoList(updateList);
  }


  return (

<Task 
      todoList={todoList}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      deletefun={deletefun}
      handleComplete={handleComplete}
      value = {inputValue}
  />

  )
}

export default App;
