import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Container, Col, Button, Spinner } from "reactstrap";
import CardProduct from "../components/CardProduct";
import { getListProduct } from "../redux/product";
function Product() {
  const dispatch = useDispatch();
  const { products , currentPage ,lastPage } = useSelector((state) => state.product);
  const [page, setPage] = useState(1)
  useEffect(() => {
    console.log(page)
    dispatch(getListProduct({page}));
  }, [page]);

  return (
    <div className="px-5 py-2">
      {products.length > 0 ? (
        <Row className="mt-1  ">
          {products.map((product) => (
            <Col sm={3} key={product.id}>
              <CardProduct product={product} />
            </Col>
          ))}
        </Row>
      ) : (
        <div className="text-center">
          <Spinner />
        </div>
      )}
      <div className="d-flex mt-3 justify-content-center gap-4 align-items-center">
        <Button color="primary" disabled={page===1} onClick={(event)=>setPage(page-1)} >{"<"}</Button>
        <span>{currentPage +"-"+ lastPage}</span>
        <Button color="primary" disabled={page===lastPage} onClick={(event)=>setPage(page+1)}>{">"}</Button>
      </div>
    </div>
  );
}

export default Product;
