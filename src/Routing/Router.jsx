import React from 'react'
import {HashRouter,Routes,Route} from 'react-router-dom'
import { Blogpost, Menu } from '../Components'
import { Login,Logout } from '../Login'
import { Home,Blog,Profile,NotFound} from '../Pages'
import{AuthProvider, PrivateRoute} from '../Login/auth'

const Router = () => {
  return (
    <HashRouter>
      <AuthProvider>
        <Menu/>
    <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      
      <Route path='/blog' element={<Blog/>}>
         <Route path=':slug' element={<Blogpost/>}/>
      </Route>

      <Route path='/login' element={<Login/>}/>

      <Route path='/logout' element={
      <PrivateRoute><Logout/></PrivateRoute>
      }/>

      <Route path='/profile'
       element={<PrivateRoute><Profile/></PrivateRoute>}/>
      <Route path='*' element={<NotFound/>}/>
      
    </Routes>
      </AuthProvider>
    
  </HashRouter>
  )
}

export {Router}