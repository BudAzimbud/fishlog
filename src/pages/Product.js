import React from "react";
import {Row, Container, Col } from "reactstrap";
import CardProduct from "../components/CardProduct";
function Product() {
  return (
    <Container >
        <Row className="mt-1">
            <Col sm={3}>
                <CardProduct />
            </Col>
        </Row>
    </Container>
  );
}

export default Product;
