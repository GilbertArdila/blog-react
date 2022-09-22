import React from 'react'
import { useAuth } from '../../Login/auth'
import './index.css'

const Profile = () => {
  const auth=useAuth()
  

  return (
    <div className='profile'>
      <div className='profile-image'/>
    <h1 className='profile-title'>Perfil</h1>
    <p className='profile-name'>{`Bienvenido  ${auth.userData.user} `}</p>
    <p className='profile-password'>{`tu clave de ingreso es ${auth.userData.password}`}</p>
    <button className='succes btn'>Cambiar clave</button>
    </div>
    
    
    
  )
}

export  {Profile}