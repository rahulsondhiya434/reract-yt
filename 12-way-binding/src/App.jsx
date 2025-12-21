import React from 'react'
import { useState } from 'react';

const App = () => {

  const [title, setTitle] = useState('Deepak')

  const Submithandler = (e) => {
    console.log("form Submitted");
    e.preventDefualt();

    
  }

  return (
    <div>
      <input type='text' 
      placeholder='Enter Your Name'
     value={title}
     onChange={(e) => {
      setTitle(e.target.value);
     }}
      />
      <button onSubmit={Submithandler}>Submit</button>
    </div>
  )
}

export default App
