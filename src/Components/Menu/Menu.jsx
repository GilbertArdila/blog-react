import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../../Login/auth'
import  './styles.css'

const Menu = () => {
    const auth= useAuth()

  return (
    <nav className='navbar'>
        <ul className='navbar-list'>
           {routes.map(route=>{
            if(route.publicOnly && auth.userData)return null
            if(route.private && !auth.userData) return null
            return(
                <li className='navbar-list__link'  key={route.text}>
                <NavLink 
                style={({isActive})=>({fontSize: isActive? '2rem':'1.6rem', color:isActive?'red':'white',textDecoration:isActive?'underline':'none'})}
                to={route.to}
               

                >{route.text}</NavLink>
            </li>
            )
           })}
        </ul>
    </nav>
  )
}

const routes=[];
routes.push({
    to:'/home',
    text:'Home',
    publicOnly:false,
    private:false
});
routes.push({
    to:'/blog',
    text:'Blog',
    publicOnly:false,
    private:false
});
routes.push({
    to:'/profile',
    text:'Profile',
    publicOnly:false,
    private:true
});
routes.push({
    to:'/login',
    text:'Login',
    publicOnly:true,
    private:false
});
routes.push({
    to:'/logout',
    text:'Logout',
    publicOnly:false,
    private:true
});
export  {Menu}