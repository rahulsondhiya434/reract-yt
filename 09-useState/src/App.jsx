// import React from 'react'
// import { useState } from 'react'

// const App = () => {

//   const [num, setNum] = useState(10);
//   const [username, setusername] = useState('Rahul');
//   const [users, setusers] = useState([10, 20, 30]);

//   function changeNum() {
//     setNum(30);
//     setusername('rohit');
//     setusers([100, 300, 400]);
//   }

//   return (
//     <div>
//       <h1 >value of a is {num} < br /> {users} <br />value of user is {username}</h1>
//       <button onClick={changeNum}>Click </button>
//     </div>
//   )
// }

// export default App

import React from 'react'
import { useState } from 'react';

const App = () => {

  const [count, setCount] = useState(0);

  function increasecount() {
    setCount(count + 1)
  }

  function decreasecount() {
    setCount(count - 1);
  }

  function jump5Num() {
    setCount(count + 5);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increasecount}>increase</button>
      <button onClick={decreasecount}>decrease</button>
      <button onClick={jump5Num}>Increase by 5</button>
    </div>
  )
}

export default App
