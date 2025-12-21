import React from 'react'


const App = () => {

  const PageScrolling = (elem) => {
    if (elem>0) {
      console.log('up scrolling')
    }else {
      console.log('down scrolling')
    }
  } 

  return (
    <div onWheel={(elem)=> {
      PageScrolling(elem.deltaY)
    }} className='box'>

      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
    </div>
  )
}

export default App;
