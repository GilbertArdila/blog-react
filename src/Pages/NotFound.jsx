import React from 'react'

const NotFound = () => {
  //para la historia de navegación
  const auth=useAuth();
  let  setNavHistory=auth.setNavHistory;
  React.useEffect(() => {
    setNavHistory(window.location.href)
  }, [])
  return (
    <div>NotFound</div>
  )
}

export  {NotFound}