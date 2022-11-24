import React from 'react'

const Item = ({nombre_producto, descripcion_producto, precio_producto, imagen_producto}) => {
  return (
    
    <div className="producto-item p-[1px] border-solid hover:border-[1px] border-black max-w-[185px]  ">

        <div className='min-h-[185px]  relative overflow-hidden' >
        <img className='max-h-[185px] overflow-hidden' src={imagen_producto} alt="foto producto" />

        <p className="datos-producto card__price bg-[#dee6f0] px-2 w-max absolute -bottom-0 font-semibold">${precio_producto}</p>
        </div>

        

        <div className=" p-2">          
          <h3 className="card__title text-sm">{nombre_producto}</h3>            
          <p className="card__desc text-gray-500 text-sm h-[60px] overflow-hidden">{descripcion_producto}</p>
        </div>

    </div>
    
  )
}

export default Item