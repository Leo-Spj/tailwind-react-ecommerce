import React,{useState, useEffect} from 'react'
import Item from './Item.js'

const ItemLinst = ({busqueda}) => {
  const[productos, setProductos] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/${busqueda}`)
    .then( (data)=>data.json())
    .then( (data)=>setProductos(data))
    
    .catch( (error)=>console.log(error))
    
  }, []);



  return (
    <>
    <div className=' mt-8 grid gap-3 grid-cols-2 md:grid-cols-4 lg:grid-cols-5'>
      {productos.map((producto) => <Item nombre_producto={producto.title} descripcion_producto={producto.description} precio_producto={producto.price} imagen_producto={producto.image}/>)}
    </div>
    </>
  )
}

export default ItemLinst
