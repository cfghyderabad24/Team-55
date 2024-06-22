import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    username: false,
    name: false,
    password: false
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    const newErrors = {
      username: !formData.username,
      name: !formData.name,
      password: !formData.password
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate API call to check if username is unique
      const isUnique = await checkUsernameUnique(formData.username);
      if (isUnique) {
        // Proceed with form submission
        console.log('Form submitted:', formData);
      } else {
        setErrors({ ...errors, username: true });
      }
    }
  };

  const checkUsernameUnique = async (username) => {
    // Simulate a call to the backend to check if the username is unique
    const existingUsernames = ['user1', 'user2']; // Replace with actual API call
    return !existingUsernames.includes(username);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Register
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
            error={errors.username}
            helperText={errors.username ? 'Username is required or already taken' : ''}
          />
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
            error={errors.name}
            helperText={errors.name ? 'Name is required' : ''}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
            error={errors.password}
            helperText={errors.password ? 'Password is required' : ''}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Register
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Register;