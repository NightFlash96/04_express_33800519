// Create a new router
const express = require("express");
const router = express.Router();

// Handle the main routes

router.get("/", (req, res) => res.send("Hello World!")); 

router.get("/about", (req, res) => res.send ("<h1>This is the about page</h1>"));

// New route for about page
router.get('/about', (req, res) => res.send ('<h1>This is about page</h1>'))

// New route for contact page
router.get('/contact', (req, res) => res.send ('<h1>This is contact page</h1>'))

// Live date
function updateDate() {
    document.getElementById("date").textContent = new Date().toString();
    setInterval(updateDate, 1000);
    return;
}

// New route for date page
router.get('/date', (req, res) => res.send (
    `<h1>This is date page</h1>
    
    <p id="date">
        <script>
            updateDate();
        </script>
    </p>`))

// Export the router object so index.js can access it
module.exports = router;
