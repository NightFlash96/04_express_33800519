// Create a new router
const express = require("express");
const router = express.Router();

// Handle the main routes

router.get("/", (req, res) => res.sendFile(__dirname + "/home.html")); 

router.get("/about", (req, res) => res.send ("<h1>This is the about page</h1>"));

router.get('/contact', (req, res) => res.sendFile(__dirname + '/contact.html'));

router.get('/date', (req, res) => res.sendFile(__dirname + '/date.html'));

// router.get('/date', (req, res) => {
//     const currentDate = new Date().toString();
//     res.send (
//         `<h1>This is date page</h1>
//         <p id="date">${currentDate}</p>`)
// });


// Export the router object so index.js can access it
module.exports = router;
