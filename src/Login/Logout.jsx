import React from 'react'
import { useAuth } from './auth';
import './styles/logout.css'

const Logout = () => {
  const auth=useAuth()

  const onLogoutt=(e)=>{
    e.preventDefault();
    auth.logout()
   
  }

  return (
    <div className='logout'>
      <h1 className='logout-title'>Logout</h1>
     <form className='logout-form' onSubmit={onLogoutt} >
       <label htmlFor='user'>{'¿Deseas salir?'}</label>
      

       <button type='submit' className='btn warning'  >Salir</button>

     </form>
    </div>
  )
}

export  {Logout}