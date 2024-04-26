import './App.css';
import { useState } from 'react';
/*import deleteIcon from './x.svg';*/


function App() {
  const[input, setInput ] = useState("");
  const[list, setList ] = useState([]);


  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const handleTask = () => {
    setList([...list,input])
    setInput("")
  }
/*
  const handleDelete = () => {
    const filterList=list.filter((elm)=>elm !== list )
    console.log("filterList",filterList);
    setList(filterList)
  }*/

  return (
    <div className='App'>
      <h2>To Do List</h2>
      <div className='container'>
        <div className='input-box'>
          <input type='text' value={input} onChange={(e)=>handleInput(e)}  placeholder='Enter Task...' />
          <button onClick={handleTask}>Add Task</button>
        </div>
        <div className='list'>
          <ul>
            {list.map((item, i)=><li key={i} >{item} 
          <img src=''  className='dlt-icon' alt=''  /*onClick={()=>handleDelete(i)} */ /> </li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
