import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { Blogpost, Menu } from '../Components'
import { Login, Logout } from '../Login'
import { Home, Blog, Profile, NotFound } from '../Pages'
import { AuthProvider, PrivateRoute } from '../Login/auth'
import { NuevoPost } from '../Pages/NuevoPost/NuevoPost'

const Router = ({ setModal, setBlog }) => {
  return (
    <HashRouter>
      <AuthProvider>
        <Menu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />

          <Route path='/blog' element={<Blog />}>
            <Route path=':slug' element={<Blogpost
              setModal={setModal}
              setBlog={setBlog}
             
            />} />
          </Route>

          <Route path='/login' element={<Login />} />

          <Route path='/logout' element={
            <PrivateRoute><Logout /></PrivateRoute>
          } />

          <Route path='/nuevo' element={
            <PrivateRoute><NuevoPost
            
           
            /></PrivateRoute>
          } />

          <Route path='/profile'
            element={<PrivateRoute><Profile /></PrivateRoute>} />
          <Route path='*' element={<NotFound />} />

        </Routes>
      </AuthProvider>

    </HashRouter>
  )
}

export { Router }