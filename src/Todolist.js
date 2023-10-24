import React, { useState } from 'react';
import Todotable from './Todotable';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import moment from 'moment';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

function Todolist() {

    const [ desc, setDesc ] = useState({description:'', date:''});
    const [ todos, setTodos ] = useState([]);
    const [value, setValue] = useState(null);
  
    const handleDescriptionInput = (e) => {
        setDesc({...desc, description: e.target.value})
    }
  
    const addTodo = (e) => {
      const newDate = `${moment(value).date()}.${moment(value).month()}.${moment(value).year()}`
      const copy = desc;
      copy.date = newDate
      e.preventDefault()
      setTodos([...todos, copy])
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
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
              <DatePicker defaultValue={dayjs('2023-10-24')} value={value} onChange={(newValue) => setValue(newValue)} />
            </DemoContainer>
          </LocalizationProvider>
          <input type="submit" value="Add"/>
        </form>
        <Todotable deleteTodo={deleteTodo} todos={todos} />
      </div>
    );
  }
  
  export default Todolist;