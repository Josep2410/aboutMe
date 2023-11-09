import React from 'react'
import {Outlet, Link} from 'react-router-dom'

export default function RootBG(){

  const navStrings = ['Home', 'Projects', 'Interests', 'Feedback', 'Contact']
  const [state, setState] = React.useState(navStrings[0])

  function changeState(val){
    setState(val)
  }

  const navLinks = navStrings.map(str =>{
    return(
      <Link to={str} id="links">
      <Badge key={str} id={str} state={state} changeState={changeState}>
            {str}
        </Badge>
      </Link>
    )
  })

  return (
    <div className='container-fluid main-bg'>
      <nav className='nav-container'>
        {navLinks}
      </nav>
      <Outlet/>
    </div>
  )
}

function Badge({children, id, state, changeState}){

  const match = id === state

  const activeStyle = {
    backgroundColor : match? 'grey' : '', 
    borderRadius :  match? 10 + 'px' : '',
    color: match? 'white' : 'black'
  }

  return(
    <div  id="badge" style={activeStyle} onClick={()=>changeState(id)}>
      {children}
    </div>)
}

