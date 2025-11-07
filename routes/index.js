// routes/index.js
const express = require('express');
const router = express.Router();

// Home page
router.get('/', (req, res) => {
  res.render('home', { title: 'Home | Jesse Daniel Mshelizah' });
});

// About page
router.get('/about', (req, res) => {
  res.render('about', { title: 'About | Jesse Daniel Mshelizah' });
});

// Projects page
router.get('/projects', (req, res) => {
  res.render('projects', { title: 'Projects | Jesse Daniel Mshelizah' });
});

// Contact page
router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact | Jesse Daniel Mshelizah' });
});

module.exports = router;
