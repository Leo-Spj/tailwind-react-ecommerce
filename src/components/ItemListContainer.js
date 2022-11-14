import React from 'react'
import ItemLinst from './ItemLinst'


const ItemListContainer = ({greeting}) => {
  return (

    <>
    <div className='max-w-tope bg-orange-50 m-auto '>
        <div className="m-auto">
            <h2 >{greeting }</h2>
        </div>

        <div className='w-[34rem] bg-orange-300 p-4'>
            <ItemLinst />     
        </div>
        
    </div>
    </>

  )
}

export default ItemListContainer