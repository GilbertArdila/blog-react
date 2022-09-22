import React from 'react'
import { Navigate} from 'react-router-dom'
import { useAuth } from './auth'
import './styles/login.css'

const Login = () => {
  const [user, setUser] = React.useState('')
  const [password, setPassword] = React.useState('')
  const auth=useAuth()
 

  const onLogin=(e)=>{
    e.preventDefault();
    if(user==='' || password===''){
      alert('Por favor ingresa tus credenciales')
    }else{
       //enviamos los datos a auth para la autenticación
   auth.login({user,password})
    }
   
  
  
  }

 //si ya estamos logeados no podemos ir a login de nuevo
  if(auth.userData){
    return <Navigate to={'/profile'}/>
  }
  return (
   <div className='login'>
     <h1 className='login-title'>Login</h1>
     <form className='login-form' onSubmit={onLogin} >
       <label htmlFor='user'>Usuario</label>
       <input id='user' value={user} onChange={e=>setUser(e.target.value)}/>

       <label htmlFor='password'>Password</label>
       <input id='password' value={password} onChange={e=>setPassword(e.target.value)}/>

       <button className='btn' type='submit'  >Enviar</button>

     </form>
   </div>
  )
}

export  {Login}