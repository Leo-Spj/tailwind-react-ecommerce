import React from 'react'
import ItemList from './ItemList'


const ItemListContainer = ({greeting}) => {
  return (

    <>
    <div className='max-w-tope  m-auto'>

        <div className='flex justify-center'>
            <h1 className='text-3xl font-bold'>{greeting}</h1>
        </div>  
        
        
        <ItemList />     
        
        
    </div>
    </>

  )
}

export default ItemListContainer