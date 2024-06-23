import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Ngo.css'; // Ensure you have Principal.css in the correct location
import Img1 from '../images/cfg_pic1.jpg';
import Img2 from '../images/cfg_pic2.jpg';
import Img3 from '../images/cfg_pic3.jpg';


function Princi() {
  const [cart, setCart] = useState([]);
  const products = [
    {
      id: 1,
      name: "Educational Leadership Handbook",
      description: "Comprehensive guide for principals on effective educational leadership.",
      price: "$39.99",
      image: Img1
    },
    {
      id: 2,
      name: "School Management Software",
      description: "Streamline administrative tasks and improve school management.",
      price: "$199.99",
      image: Img2
    },
    {
      id: 3,
      name: "Professional Development Courses",
      description: "Courses designed to enhance teaching skills and leadership abilities.",
      price: "$49.99",
      image: Img1
    },
    {
      id: 4,
      name: "STEM Education Kits",
      description: "Engage students in science, technology, engineering, and math (STEM) activities.",
      price: "$79.99",
      image:Img2
    },
  
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
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
              <h3>Empower School Leadership</h3>
              <p>Equip principals with tools for effective educational management.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src={Img2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Enhance Administrative Efficiency</h3>
              <p>Streamline school operations with advanced management solutions.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src={Img3}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Support School Innovation</h3>
              <p>Introduce cutting-edge educational technologies to foster innovation.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>

      <section className="benefits-section text-center">
        <h2>Benefits for Principals and Administration</h2>
        <p>Transform your school with our range of educational products designed to support principals and administration in achieving educational excellence.</p>
        <ul>
          <li>Access to leadership resources and professional development tools</li>
          <li>Enhance school management and administrative efficiency</li>
          <li>Integrate innovative technologies for improved teaching and learning outcomes</li>
          <li>Support staff development and student achievement initiatives</li>
          <li>Customized solutions tailored to meet your school’s unique needs</li>
          <li>Receive ongoing support and training from educational experts</li>
        </ul>
      </section>

      <section className="products-section text-center">
        <h2>Featured Products</h2>
        <div className="product-list">
          {products.map(product => (
            <Card key={product.id} style={{ width: '18rem' }}>
              <Card.Img variant="top" src={product.image} className="product-image" />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text><strong>{product.price}</strong></Card.Text>
                <Button variant="primary" onClick={() => addToCart(product)}>Buy Now</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Princi;