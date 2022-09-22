import React from 'react'
import  ReactDOM  from "react-dom";
import './index.css'


function Modal({blog,setModal}){
    const [contenido, setContenido] = React.useState('')

    const onUpdate=(e)=>{
        e.preventDefault();
        blog.content=contenido
        setModal(false)
    }

    return ReactDOM.createPortal(
        <div  className='modal'>
            <form onSubmit={onUpdate}>
                <textarea placeholder='ingresa el contenido de reemplazo'
                rows="20" 
                value={contenido}
                onChange={(e)=>setContenido(e.target.value)}
                />

                <button
                 className='btn succes'
                 type='submit'
                 >Actualizar</button>
            </form>
           
         
        </div>,
       document.getElementById("modal")
    );
}
export{Modal}