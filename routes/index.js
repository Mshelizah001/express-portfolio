// All page routes

const express = require('express');
const router = express.Router();

// Home
router.get('/', (req, res) =>
  res.render('home', { title: 'Home | Jesse Daniel Mshelizah' })
);

// About
router.get('/about', (req, res) =>
  res.render('about', { title: 'About | Jesse Daniel Mshelizah' })
);

// Projects
router.get('/projects', (req, res) =>
  res.render('projects', { title: 'Projects | Jesse Daniel Mshelizah' })
);

// Contact (GET)
router.get('/contact', (req, res) =>
  res.render('contact', { title: 'Contact | Jesse Daniel Mshelizah' })
);

// Contact (POST) — simple thank-you so the form works
router.post('/contact', (req, res) => {
  res.render('contact', {
    title: 'Contact | Jesse Daniel Mshelizah',
    message: 'Thanks! I received your message.'
  });
});

module.exports = router;
