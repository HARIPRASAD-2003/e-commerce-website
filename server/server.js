const express = require('express');
const bodyParser = require('body-parser');
const {executeQuery} = require('./db'); // Assuming js is in the same directory
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');

dotenv.config();


const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
  origin: 'http://localhost:3000',  // Replace with your frontend's origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// Example route to get all products
app.get('/api/products', async (req, res) => {
  try {
    const result = await executeQuery('SELECT * FROM products');
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
    const result = await executeQuery(`SELECT * FROM products WHERE product_id = ${productId}`);
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
    console.log(username, email, password);
    try {
      // Check if the username or email already exists
      const existingUser = await executeQuery(`SELECT * FROM users WHERE username = '${username}' OR email = '${email}'`);
      if (existingUser.length > 0) {
        return res.status(400).json({ error: 'Username or email already exists' });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 11);
  
      // Insert the new user into the database
      const result = await executeQuery(`INSERT INTO users (username, email, password) VALUES ('${username}', '${email}', '${hashedPassword}')`);
  
      // You may want to generate and send a JWT token for the new user at this point
      console.log(result);
      res.status(201).json(result[0]);
    } catch (error) {
      console.log('Error signing up user', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  app.post('/api/signup-sellers', async (req, res) => {
    const { username, email, password } = req.body;
    console.log(username, email, password);
    try {
      // Check if the username or email already exists
      const existingUser = await executeQuery(`SELECT * FROM sellers WHERE username = '${username}' OR email = '${email}'`);
      if (existingUser.length > 0) {
        return res.status(400).json({ error: 'Username or email already exists' });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 11);
  
      // Insert the new user into the database
      const result = await executeQuery(`INSERT INTO sellers (username, email, password) VALUES ('${username}', '${email}', '${hashedPassword}')`);
  
      // You may want to generate and send a JWT token for the new user at this point
      console.log(result);
      res.status(201).json(result[0]);
    } catch (error) {
      console.log('Error signing up user', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  
  // Login route
  app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      // Check if the user exists
      const user = await executeQuery(`SELECT * FROM users WHERE username = '${username}' OR email = '${username}'`);
      if (user.length === 0) {
        return res.status(401).json({ error: 'Invalid username' });
      }
  
      // Compare the provided password with the hashed password in the database
      const passwordMatch = await bcrypt.compare(password, user[0].password);
      if (!passwordMatch) {
        return res.status(401).json({ error: 'Invalid password' });
      }
  
      // Generate a JWT token for authentication
      const token = jwt.sign({ user_id: user[0].user_id }, process.env.JWT_SECRET, { expiresIn: '1h' });
       res.json({ token });
    } catch (error) {
      console.error('Error logging in user', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
// Add more routes for other features like user authentication, orders, etc.


app.post('/api/login-sellers', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if the user exists
    const user = await executeQuery(`SELECT * FROM sellers WHERE username = '${username}' or email = '${username}'`);
    if (user.length === 0) {
      return res.status(401).json({ error: 'Invalid username' });
    }

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user[0].password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    // Generate a JWT token for authentication
    const token = jwt.sign({ user_id: user[0].user_id }, process.env.JWT_SECRET, { expiresIn: '1h' });
     res.json({ token });
  } catch (error) {
    console.error('Error logging in user', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.listen(port, () => {
  console.log(`Server is running on port:${port}`);
});
