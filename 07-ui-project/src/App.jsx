import React from 'react'
import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';

const App = () => {
  
  const users = [
    {
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      color: 'royalblue',
      tag: 'Satisfied',
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661284860596-cfec12a54758?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzQ2fHx3b3JraW5nfGVufDB8fDB8fHww',
      intro: '',
      color: 'lightseagreen',
      tag: 'Underserved',
    },
    {
      img: 'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      color: 'orange',
      tag: 'Underbanked',
    },
    {
      img: 'https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
      intro: '',
      color: 'pink',
      tag: 'Underwear',
    },
  ]

  return (
    <div>
      <Section1 users={users} />
      {/* <Section2 /> */}
    </div>
  )
}

export default App;
