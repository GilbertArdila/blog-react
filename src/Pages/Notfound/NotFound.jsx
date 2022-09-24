import React from 'react'
import './index.css'
import { useAuth } from '../../Login/auth';

const NotFound = () => {
  //para la historia de navegación
  const auth=useAuth();
  let  setNavHistory=auth.setNavHistory;
  React.useEffect(() => {
    setNavHistory(window.location.href)
  }, [])
  return (
    <div className='notFound'>
      <h1>Not found</h1>
      <div/>
      <h3>Valla parece que la página que buscas no existe!</h3>
    </div>
  )
}

export  {NotFound}