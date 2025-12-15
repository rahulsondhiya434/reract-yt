import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card  user="Rahul" age={22} img="https://images.unsplash.com/photo-1441148345475-03a2e82f9719?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww"/>
      <Card  user="Rohit" age={21} img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnf3cfDEbwFCw-O6Z8TSJ8bJOpYw_RNJ7sOw&s" />
      <Card  user="Mohni" age={20} img="https://images.drivespark.com/ph-big/2021/04/toyota-fortuner-legender-27.jpg"/>
    </div>
  )
}

export default App;
