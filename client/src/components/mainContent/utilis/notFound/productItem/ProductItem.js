import React from 'react'
import ButtonComp from './ButtonComp'
// import {Link} from 'react-router-dom'
import './productItem.css'


function ProductItem({product, isAdmin, deleteProduct, handleCheck}) {

  return (
      <div className="product_card">
          {
              isAdmin && <input type="checkbox" checked={product.checked}
              onChange={() => handleCheck(product._id)} />
          }
          <img src={product.images} alt="" width='300px' />

          <div className="product_box">
              <h2 title={product.title}>{product.title}</h2>
              <span>${product.price}</span>
              <p>{product.description}</p>
          </div>
     <ButtonComp product={product} deleteProduct={deleteProduct}/>
    </div>
  )
}

export default ProductItem