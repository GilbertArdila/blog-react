import React from 'react'
import  ReactDOM  from "react-dom";
import './index.css'
import {putData} from '../../Api/Services'


function Modal({blog,setModal}){
    const [contenido, setContenido] = React.useState(blog.content)
   

    const onUpdate=(e)=>{
        e.preventDefault();
       const data={
        author:blog.author,
        title:blog.title,
        content:contenido
       }
       const id=blog.id
       putData(`/blogdata/${id}`,data)
        setModal(false)
        
        
        
    }

    return ReactDOM.createPortal(
        <div  className='modal'>
            <form onSubmit={onUpdate}>
                <span className='close' onClick={()=>setModal(false)}>X</span>
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