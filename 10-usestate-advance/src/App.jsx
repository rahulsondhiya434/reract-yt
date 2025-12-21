import React, { useState } from 'react'

const App = () => {

// const [num, setNum] = useState({user:'Rishi', age: 13});

// const btnClicked = () => {
// setNum(prev => ({
//   ...prev,
//   age: 56
// }))
// }

const [num, setNum ] = useState(10);

const btnClicked = () => {
  setNum(prev => (prev  + 1));
  setNum(prev => (prev  + 1));
  setNum(prev => (prev  + 1));
} 

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>click</button>
    </div>
  )
}

export default App;
