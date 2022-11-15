import React from 'react'
import ItemList from './ItemList'


const ItemListContainer = ({greeting}) => {
  return (

    <>
    <div className='max-w-tope  m-auto'>
        
        <h2 >{greeting }</h2>
        

        <div className='m-[3px]'>
            <ItemList />     
        </div>
        
    </div>
    </>

  )
}

export default ItemListContainer