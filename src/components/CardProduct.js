import React, { Fragment } from 'react'
import {Card, CardBody, CardTitle, Button, CardSubtitle, CardText} from 'reactstrap' 
function CardProduct({product}) {
  return (
    <div className='mt-3'>
         <Card
        style={{
          width: "18rem",
        }}
      >
        <img alt="Sample" src={product?.picture_1} width="100%" height="200" />
        <CardBody>
          <CardTitle tag="h5">{product?.name}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {product?.category_name}
          </CardSubtitle>
          <CardText>
                {product?.description}
          </CardText>
          <Button>Buy</Button>
        </CardBody>
      </Card>
    </div>
  )
}

export default CardProduct