import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Ngo.css';
import Img1 from '../images/prof.jpeg';
import Img2 from '../images/prof.jpeg';
import Img3 from '../images/prof.jpeg';
import ProductImg1 from "../images/prof.jpeg";
import ProductImg2 from "../images/prof.jpeg";
import Order from './Order';

function Ngo() {
  const products = [
    {
      id: 1,
      name: "Coding Toy-1",
      description: "DIY explorer toy for learning programming without a computer.",
      price: "$49.99",
      image: ProductImg1
    },
    {
      id: 2,
      name: "Coding Toy-2",
      description: "Introduces visually challenged students to coding.",
      price: "$39.99",
      image: ProductImg2
    },
    {
      id: 3,
      name: "Advanced Coding Toy",
      description: "A more advanced DIY kit for older students to deepen their coding knowledge.",
      price: "$59.99",
      image: ProductImg1
    },
    {
      id: 4,
      name: "Robotics Kit",
      description: "A comprehensive robotics kit to teach the basics of robotics and automation.",
      price: "$89.99",
      image: ProductImg2
    },
    {
      id: 5,
      name: "Coding Puzzle Game",
      description: "A puzzle game designed to enhance logical thinking and coding skills.",
      price: "$29.99",
      image: ProductImg1
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const addToCart = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  return (
    <div>
      <section className="carousel-section">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src={Img1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Empower Students</h3>
              <p>Provide innovative educational tools to foster learning.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src={Img2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Inclusive Education</h3>
              <p>Ensure no child is left behind with our tactile kits.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src={Img3}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Support Your Mission</h3>
              <p>Join us in reaching 1 million students by 2026.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>

      <section className="benefits-section text-center">
        <h2>Benefits for NGOs</h2>
        <p>Partner with us to bring innovative, low-cost educational products to the communities you serve. Empower students with the skills they need to succeed in the digital age.</p>
        <ul>
          <li>Access to cutting-edge educational tools</li>
          <li>Support inclusive education for all students</li>
          <li>Enhance problem-solving and programming skills</li>
          <li>Join a community of like-minded educators and organizations</li>
          <li>Receive training and support for effective implementation</li>
          <li>Benefit from special NGO pricing and bulk purchase discounts</li>
          <li>Promote sustainability with eco-friendly products</li>
        </ul>
      </section>

      <section className="products-section text-center">
        <h2>Our Products</h2>
        <div className="product-list">
          {products.map(product => (
            <Card key={product.id} style={{ width: '18rem' }}>
              <Card.Img variant="top" src={product.image} className="product-image" />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text><strong>{product.price}</strong></Card.Text>
                <Button variant="primary" onClick={() => addToCart(product)}>Add to Cart</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </section>

      {selectedProduct && (
        <Order
          show={showModal}
          handleClose={handleCloseModal}
          product={selectedProduct}
        />
      )}
    </div>
  );
}

export default Ngo;
