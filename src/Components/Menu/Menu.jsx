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
                style={({isActive})=>({fontSize: isActive? '2rem':'1.6rem', color:isActive?'#e75e26':'black',textDecoration:isActive?'underline':'none'})}
               
                to={route.to}
               

                ><img src={route.src} alt='text'/></NavLink>
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
    src:'https://cdn4.iconfinder.com/data/icons/48-bubbles/48/01.Home-128.png',
    publicOnly:false,
    private:false
});
routes.push({
    to:'/blog',
    text:'Blog',
    src:'https://cdn3.iconfinder.com/data/icons/picons-social/57/65-blogger-128.png',
    publicOnly:false,
    private:false
});
routes.push({
    to:'/profile',
    text:'Profile',
    src:'https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/avatar-128.png',
    publicOnly:false,
    private:true
});
routes.push({
    to:'/login',
    text:'Login',
    src:'https://cdn3.iconfinder.com/data/icons/strokeline/128/revisi_01-128.png',
    publicOnly:true,
    private:false
});
routes.push({
    to:'/logout',
    text:'Logout',
    src:'https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_exit2-128.png',
    publicOnly:false,
    private:true
});
export  {Menu}