import './App.css';

export const Task = (props) => {
    return (
    <div className="App">
    <section className="header">
      <h3>ToDoList Simple App</h3>
      <div className='div'>
      <input onChange={props.handleChange} value={props.value} />
       <button onClick={props.handleSubmit}>Add Todo</button>
      </div>
    </section>
    <section className="body">
     <ul>
       {props.todoList.map((todo,index) =>{
        return (
        <div key={todo.id} className={todo.completed ? 'div1 success':'div1 warning'}>
           <p>{index+1}.</p>
           <h6>{todo.name}</h6>
           <button onClick={() => props.deletefun(todo)} id='incomp' >X</button>
           <button onClick={() => props.handleComplete(todo.id)} id={todo.completed ?'comp':'incomp'} >&#10004;</button>
        </div>
        )
       })}
     </ul>
    </section>
   </div>
    )
} 
