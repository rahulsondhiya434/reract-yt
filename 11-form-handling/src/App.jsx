import React from 'react'

const div = () => {

  const Submithandler = (e) => {
    e.preventDefault();
    console.log('form Submitted');
  }

  return (
    <div>
     <form onSubmit={(e) => {
      Submithandler(e);
     }}>
      <input type='text' placeholder='Enter your Name'/>
      <button >Submit</button>
     </form>
    </div>
  )
}

export default div
