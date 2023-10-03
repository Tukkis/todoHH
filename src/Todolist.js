import React, { useState } from 'react';
import Todotable from './Todotable';

function Todolist() {

    const [ desc, setDesc ] = useState({description:'', date:''});
    const [ todos, setTodos ] = useState([]);
  
    const handleDescriptionInput = (e) => {
        setDesc({...desc, description: e.target.value})
    }
  
    const handleDateInput = (e) => {
        setDesc({...desc, date: e.target.value})
    }
  
    const addTodo = (e) => {
      e.preventDefault()
      setTodos([...todos, desc])
      setDesc({description:'', date:''})
    }
  
    const deleteTodo = (i) => {
      const copy = todos.filter((todo, fIndex) => fIndex !== i)
      setTodos(copy)
    }
  
    return (
      <div className="App">
        <form onSubmit={addTodo }> 
          <input type="text" value={desc.description} onChange={handleDescriptionInput} />
          <input type="date" value={desc.date} onChange={handleDateInput} />
          <input type="submit" value="Add"/>
        </form>
        <Todotable deleteTodo={deleteTodo} todos={todos} />
      </div>
    );
  }
  
  export default Todolist;