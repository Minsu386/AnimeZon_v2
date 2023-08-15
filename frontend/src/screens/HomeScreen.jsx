import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import Loader from '../components/loader';
import Message from '../components/Message';


const HomeScreen = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <>
      { isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{ error?.data?.message || error.error }</Message>
        ) : (
          <>
          <Message variant='warning'>This is a Development practice application. No real products or function</Message>
          <h1>Latest Products</h1>
          <Row>
            {/* loop through products and place into column */}
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
              </Col>
            )) }
          </Row>
      </>) }

      
    </>
  )
}

export default HomeScreen