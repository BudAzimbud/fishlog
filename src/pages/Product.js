import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Container, Col, Button, Spinner } from "reactstrap";
import CardProduct from "../components/CardProduct";
import { getListProduct } from "../redux/product";
function Product() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(getListProduct())
  }, []);

  return (
    <div className="px-5 py-2">
        {
            products.length > 0 ?
            (
                <Row className="mt-1  ">
                {products.map((product) => (
                  <Col sm={3} key={product.id}>
                    <CardProduct product={product} />
                  </Col>
                ))}
              </Row>
            ) : 
            (<div className="text-center">
                <Spinner />
            </div>)
        }
     
      <div className="d-flex justify-content-center gap-4">
            <Button color="primary">
                {"<"}
            </Button>
            <Button color="primary">
                {">"}
            </Button>
      </div>
    </div>
  );
}

export default Product;
