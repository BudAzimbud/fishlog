import React, { Fragment } from 'react'
import {Card, CardBody, CardTitle, Button, CardSubtitle, CardText} from 'reactstrap' 
function CardProduct({product}) {
  return (
    <Fragment>
         <Card
        style={{
          width: "18rem",
        }}
      >
        <img alt="Sample" src="https://picsum.photos/300/200" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Card subtitle
          </CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card‘s content.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </Fragment>
  )
}

export default CardProduct