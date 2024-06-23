import React, { useEffect, useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import 'chart.js/auto'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Admin.css';

const Admin= () => {
  const [barChartData, setBarChartData] = useState({
    labels: [],
    datasets: [],
  });
  const [lineChartData, setLineChartData] = useState({
    labels: [],
    datasets: [],
  });
  const [newProduct, setNewProduct] = useState({
    id: '',
    name: '',
    price: '',
  });

  useEffect(() => {
    // Static data for demonstration
    const products = [
      { name: 'Coding Toy-1', dateOfOrder: '2024-06-01' },
      { name: 'Coding Toy-2', dateOfOrder: '2024-06-02' },
      { name: 'Coding Toy-1', dateOfOrder: '2024-06-03' },
      { name: 'Coding Toy-2', dateOfOrder: '2024-06-04' },
      { name: 'Coding Toy-1', dateOfOrder: '2024-06-05' },
    ];

    // Prepare data for bar chart
    const productCounts = products.reduce((acc, product) => {
      acc[product.name] = (acc[product.name] || 0) + 1;
      return acc;
    }, {});

    const barData = {
      labels: Object.keys(productCounts),
      datasets: [
        {
          label: 'Number of Orders',
          data: Object.values(productCounts),
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };
    setBarChartData(barData);

    // Prepare data for line chart
    const ordersByDate = products.reduce((acc, product) => {
      if (!acc[product.dateOfOrder]) {
        acc[product.dateOfOrder] = { date: product.dateOfOrder, counts: {} };
      }
      acc[product.dateOfOrder].counts[product.name] = (acc[product.dateOfOrder].counts[product.name] || 0) + 1;
      return acc;
    }, {});

    const sortedDates = Object.keys(ordersByDate).sort();

    const lineData = {
      labels: sortedDates,
      datasets: Object.keys(productCounts).map((productName) => ({
        label: productName,
        data: sortedDates.map((date) => ordersByDate[date]?.counts[productName] || 0),
        fill: false,
        borderColor: 'rgba(255, 99, 132, 0.2)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderWidth: 1,
      })),
    };
    setLineChartData(lineData);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSubmit = async () => {
    const response = await fetch('http://localhost:000/api/products', { // Adjust the URL to your backend endpoint
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    });

    if (response.ok) {
      console.log('Product added successfully');
      // Optionally, you can reset the form or show a success message
      setNewProduct({ id: '', name: '', price: '' });
    } else {
      console.error('Failed to add product');
      // Optionally, handle the error
    }
  };

  return (
    <Container>
      <Row className="justify-content-center mt-4">
        <Col md={8}>
          <Card className="mb-4">
            <h1 >Admin</h1>
            <Card.Header as="h5">Sales Analysis</Card.Header>
            <Card.Body>
              {barChartData && barChartData.datasets.length > 0 ? (
                <Bar data={barChartData} />
              ) : (
                <p>Loading bar chart data...</p>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center mt-4">
        <Col md={8}>
          <Card className="mb-4">
            <Card.Header as="h5">Sales Timeline</Card.Header>
            <Card.Body>
              {lineChartData && lineChartData.datasets.length > 0 ? (
                <Line data={lineChartData} />
              ) : (
                <p>Loading line chart data...</p>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center mt-4">
        <Col md={8}>
          <Card className="mb-4">
            <Card.Header as="h5">Add New Product</Card.Header>
            <Card.Body>
              <Form>
                <Form.Group controlId="formProductId">
                  <Form.Label>Product ID</Form.Label>
                  <Form.Control
                    type="text"
                    name="id"
                    value={newProduct.id}
                    onChange={handleInputChange}
                    placeholder="Enter product ID"
                  />
                </Form.Group>
                <Form.Group controlId="formProductName" className="mt-3">
                  <Form.Label>Product Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={newProduct.name}
                    onChange={handleInputChange}
                    placeholder="Enter product name"
                  />
                </Form.Group>
                <Form.Group controlId="formProductPrice" className="mt-3">
                  <Form.Label>Product Price</Form.Label>
                  <Form.Control
                    type="text"
                    name="price"
                    value={newProduct.price}
                    onChange={handleInputChange}
                    placeholder="Enter product price"
                  />
                </Form.Group>
                <Button variant="primary" className="mt-3" onClick={handleSubmit}>
                  Add Product
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Admin;