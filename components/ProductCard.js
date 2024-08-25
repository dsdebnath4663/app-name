import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import './ProductCard.css'; // Import the CSS file

const ProductCard = ({ product }) => {
  return (
    <Card className="product-card custom-border">

      <div className="image-container">
        <Card.Img variant="top" src={product.image} />


        {!product.flag && (
          <><Badge className="badge-sofort badge-info" bg="light">Sofort lieferbar</Badge>
            <Badge className="badge-new badge-info" bg="light">New</Badge></>)}


        {product.flag && (
          <><Badge className="badge-sofort badge-warn" bg="light">nicht lieferbar</Badge>
          </>)}

      </div>

      <Card.Body>
        <Button className="custom-button">Canify</Button>

        <div className="button-group">
          <Button className="button-graphics-one">THC {product.thc}</Button>
          <Button className="button-graphics-two">CBD {product.cbd}</Button>
          <Button className="button-graphics-three">
            <span className="circle-btn-content">
              <img src="/images/Bestrahlt.png" alt="Icon" className="circle-btn-image" />
            </span>
          </Button>
        </div>
        <Card.Title>{product.name}</Card.Title>

        <div className='text-parent-group'>
          <div className="text-group">
            <span className="left-text">Kultivar</span>
            <span className="right-text">Mango</span>
          </div>

          <div className="text-group">
            <span className="left-text">Genetik</span>
            <span className="right-text">Hybrid</span>
          </div>
        </div>

        <div className="info-container">
          <div className="left-div">
            <div className="top-text">
              <div className="top-text-left">
                €
              </div>
              <div className="top-text-right">
                {product.price}
              </div>
            </div>
            <div className="bottom-text">pro Gramm</div>
          </div>
          <div className="right-div">
            <Button className="add-to-cart-button">In den Warenkorb</Button>
          </div>
        </div>

      </Card.Body>
    </Card>
  );
};

export default ProductCard;
