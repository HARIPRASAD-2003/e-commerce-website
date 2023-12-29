const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db'); // Assuming db.js is in the same directory
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Example route to get all products
app.get('/api/products', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM products');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching products', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Example route to get a specific product by ID
app.get('/api/products/:productId', async (req, res) => {
  const productId = req.params.productId;

  try {
    const result = await db.query('SELECT * FROM products WHERE product_id = $1', [productId]);
    if (result.rows.length === 0) {
      res.status(404).json({ error: 'Product not found' });
    } else {
      res.json(result.rows[0]);
    }
  } catch (error) {
    console.error('Error fetching product', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/signup', async (req, res) => {
    const { username, email, password } = req.body;
  
    try {
      // Check if the username or email already exists
      const existingUser = await db.query('SELECT * FROM users WHERE username = $1 OR email = $2', [username, email]);
      if (existingUser.rows.length > 0) {
        return res.status(400).json({ error: 'Username or email already exists' });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Insert the new user into the database
      const result = await db.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *', [username, email, hashedPassword]);
  
      // You may want to generate and send a JWT token for the new user at this point
  
      res.status(201).json(result.rows[0]);
    } catch (error) {
      console.error('Error signing up user', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  // Login route
  app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      // Check if the user exists
      const user = await db.query('SELECT * FROM users WHERE username = $1', [username]);
      if (user.rows.length === 0) {
        return res.status(401).json({ error: 'Invalid username or password' });
      }
  
      // Compare the provided password with the hashed password in the database
      const passwordMatch = await bcrypt.compare(password, user.rows[0].password);
      if (!passwordMatch) {
        return res.status(401).json({ error: 'Invalid username or password' });
      }
  
      // Generate a JWT token for authentication
      const token = jwt.sign({ user_id: user.rows[0].user_id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  
      res.json({ token });
    } catch (error) {
      console.error('Error logging in user', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
// Add more routes for other features like user authentication, orders, etc.

app.listen(port, () => {
  console.log(`Server is running on port:${port}`);
});
