import React from "react";
import { useNavigate } from "react-router-dom";
import { Navigate } from 'react-router-dom'

//lista para los permisos
const adminList=[
  {nombre:'Gilbert',
   rol:'Admin'   
},
{nombre:'Leon',
rol:'Editor'},
{nombre:'Geronimo',
rol:'Checker'}
];
//creamos un contexto
const authContext = React.createContext();

//creamos el provider
function AuthProvider({ children }) {

  const navigate = useNavigate();
  const [userData, setUserData] = React.useState(null);

  const login = ({ user, password }) => {
    //¿es administrador, editor o revisor?
    const isAdmin=adminList.find(admin=>admin.nombre===user && admin.rol==='Admin') ;
    const isEditor=adminList.find(admin=>admin.nombre===user && admin.rol==='Editor');
    const isChecker=adminList.find(admin=>admin.nombre===user && admin.rol==='Checker');

    setUserData({ user, password,isAdmin,isChecker,isEditor })
    navigate('/profile')
  };

  const logout = () => {
    setUserData(null)
    navigate('/')
  };

  const auth = { userData, login, logout };

  return (
    //pasamos el auth como valor del provider para pode consumirlo
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  )
}
//creamos un provider.Consumer
function useAuth() {
  const auth = React.useContext(authContext);
  return auth;
}

//verificamos si está logeado
function PrivateRoute(props) {
  const auth=useAuth()
  //si no está logeado nos redirige a login
  if (!auth.userData) {
    return <Navigate to={'/login'} />

  }
  return props.children
}
export {
  AuthProvider,
  useAuth,
  PrivateRoute
}