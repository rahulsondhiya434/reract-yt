import React from 'react'
import Navbar from './Navbar'
import PageContent from './PageContent'

const Section1 = (props) => {
  console.log()
  return (
    <div className='h-screen w-full'>
      <Navbar />
      <PageContent users={props.users} />
    </div>
  )
}

export default Section1
