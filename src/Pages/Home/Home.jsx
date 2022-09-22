import React from 'react'
import './styles.css'

const Home = () => {
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