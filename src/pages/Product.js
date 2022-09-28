import React, { useEffect, } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row,  Col, Button, Spinner } from "reactstrap";
import CardProduct from "../components/CardProduct";
import Navbar from "../components/Navbar"
import {  getListProduct, setPage } from "../redux/product";
function Product() {
  const dispatch = useDispatch();
  const { products , currentPage ,lastPage , page } = useSelector((state) => state.product);
//   const [page, setPage] = useState(1)
  useEffect(() => {
    dispatch(getListProduct({page}));
  }, [page,dispatch]);

  return (
    <div >
        <Navbar/>
    <div className="px-5 py-2">
      {products.length > 0 ? (
        <Row className="mt-5  ">
          {products.map((product) => (
            <Col sm={6} md={6} xl={3} key={product.id}>
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
        <Button className="shadow" color="primary" disabled={page===1} onClick={(event)=>dispatch(setPage({page:-1}))} >{"<"}</Button>
        <span className="text-secondary small">{currentPage +"/"+ lastPage} page</span>
        <Button className="shadow" color="primary" disabled={page===lastPage} onClick={(event)=>dispatch(setPage({page:1}))}>{">"}</Button>
      </div>
    </div>
    </div>
  );
}

export default Product;
