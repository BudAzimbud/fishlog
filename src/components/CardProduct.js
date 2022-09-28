import React from 'react'
import {Card, CardBody, CardTitle, } from 'reactstrap' 
function CardProduct({product}) {
  return (
    <div className='mt-3 'style={{cursor:'pointer'}} >
         <Card
    
        className="card shadow"
      >
        <div className='position-relative ' style={{height:'200px'}}>
            <img alt="Sample" src={product?.picture_1} width="100%" height="200"  />
            <div className='position-absolute p-1 top-0 rounded-circle bg-danger text-light'>70%</div>
        </div>
        <CardBody>
          <CardTitle tag="h5">{product?.name}</CardTitle>
    
          <div className='d-flex justify-content-between'>
                <p className='h-4 text-info'>{product?.price_coret}</p>
                <p className='text-secondary small'>{product?.stock?.qty} Stok</p>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default CardProduct