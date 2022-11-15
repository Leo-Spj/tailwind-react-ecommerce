import React from 'react'

const Item2 = ({nombre_producto, descripcion_producto, precio_producto, imagen_producto}) => {
  return (
    <>
    <div className="producto-item p-[1px] border-solid hover:border-[1px] border-black w-[185px] ">

        <div className='relative overflow-hidden' >
        <img className='min-h-10' src={imagen_producto} alt="producto" />

        <p className="datos-producto card__price bg-[#e2e8f0] px-2 w-max absolute -bottom-1">${precio_producto}</p>
        </div>

        

        <div className=" p-3">          
          <h3 className="card__title text-sm">{nombre_producto}</h3>            
          <p className="card__desc text-gray-500 text-sm">{descripcion_producto}</p>
        </div>

    </div>
    </>
  )
}

export default Item2