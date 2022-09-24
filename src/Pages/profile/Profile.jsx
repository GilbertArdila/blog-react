import React from 'react'
import { useAuth } from '../../Login/auth'
import './index.css'

const Profile = () => {
 
  //para la historia de navegación
  const auth=useAuth();
  let  setNavHistory=auth.setNavHistory;
  React.useEffect(() => {
    setNavHistory(window.location.href)
  }, [])
  
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