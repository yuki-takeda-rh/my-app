import React, { useState } from 'react';
import './App.css';
import { TodoList, test } from './components/List';

const App = () => {
  
    const [list, setList] = useState<test[]>([]);
    const [contents, setContents] = useState("やりたくない");

  const InsertToDo = (event:any) => 
  {
    event.preventDefault()
      setList((prev) => [{contents, done:false}, ...prev]);
  }

  return (
    <div className="App">
      <form onSubmit={InsertToDo}>
            <input value={contents}/>
            <button type='submit'>Insert</button>
      </form>
            <input type="checkbox" name="done" id="done" onClick={}/>
      <TodoList tasks={list} />
    </div>
  );
}

export default App;
