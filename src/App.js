import React, { useState } from 'react';
import './App.css';
import Todolist from './Todolist';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


function App() {

  const [tab, setTab] = useState('Home');

  const handleChange = (event, value) => {
      setTab(value);
    };

  return (
    <div className="App">
      <Tabs value={tab} onChange={handleChange}>
        <Tab value="Home" label="Home" />
        <Tab value="Todolist" label="Todolist" />
      </Tabs>
      {tab === 'Home' && <div>Welcome!</div>}
      {tab === 'Todolist' && <Todolist />}
    </div>
  );
}

export default App;
