import React from 'react'
import { useAuth } from '../../Login/auth'
import './styles.css'

const Home = () => {
  //para la historia de navegación
  const auth=useAuth();
  let  setNavHistory=auth.setNavHistory;
  React.useEffect(() => {
    setNavHistory(window.location.href)
  }, [])
 
  return (
    <main >
     <h1 className='home-title'>El blog del desarrollador <span className='home-title_span'>frontend</span></h1>
     <p className='home-content'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio molestiae minus, enim obcaecati nam distinctio provident perferendis optio? Velit repellendus odio ab repellat reiciendis nisi aspernatur unde veniam quibusdam consectetur.
     </p>
     <div className='home-image'/>
    </main>
  )
}

export  {Home}