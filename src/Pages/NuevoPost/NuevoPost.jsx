import React from 'react'
import { useNavigate } from "react-router-dom";
import { postData } from '../../Api/Services';
import './index.css'

const NuevoPost = () => {

    const [post, setPost] = React.useState('');
    const [creador, setCreador] = React.useState('');
    const [titulo, setTitulo] = React.useState('');
    const navigate=useNavigate()

    const onCreate=(e)=>{
       e.preventDefault();
       
       const data={
        title:titulo,
        content:post,
        author:creador
       }
       if(post==='' || creador==='' || titulo==='' ){
        alert('Debe diligenciar todos los campos')
       }
       else if(post.length<50){
        alert('el contenido no debe ser menor a 50 carácteres')
       }
       else{
        postData('/blogdata.json',data)
        setPost('');
        setCreador('');
        setTitulo('');
        navigate('/blog')

       }
       

    }
  return (
    <div className='nuevoPost'>
      <span className='close'
      onClick={()=>navigate('/blog')}>x</span>
        <form onSubmit={onCreate}>
            <label htmlFor={'creador'}>{'Creador'}</label>
            <input
             id='creador'
             value={creador}
             onChange={(e)=>setCreador(e.target.value)}/>

            <label htmlFor={'titulo'}>{'Título'}</label>
            <input
             id='titulo'
             value={titulo}
             onChange={(e)=>setTitulo(e.target.value)}/>
            <textarea
             placeholder='Ingresa el contenido del post'
              rows={20}
              cols={40}
              value={post}
              onChange={(e)=>setPost(e.target.value)}/>
            <button type='submit' className='btn succes'>Crear</button>


        </form>
    </div>
  )
}

export {NuevoPost}