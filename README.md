<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Croxyy's Toy Market</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <header>
        <h1>Croxyy's Toy Market</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <section id="home">
        <div class="hero">
            <h2>Welcome to Croxyy's Toy Market!</h2>
            <p>Explore a world of marketable toys and accessories inspired by war. Subscribe to <a href="https://www.youtube.com/@croxyy_" target="_blank">Croxyy's YouTube channel</a> for exciting content!</p>
        </div>
    </section>

    <section id="products">
        <h2>Upcoming Products</h2>
        <div class="product-list">
            <!-- Add your product information here -->
            <!-- Example:
            <div class="product">
                <img src="product1.jpg" alt="Product 1">
                <h3>Product 1</h3>
                <p>Description of Product 1.</p>
            </div>
            -->
        </div>
    </section>

    <section id="about">
        <h2>About Croxyy's Toy Market</h2>
        <p>Discover the passion for marketable toys and accessories inspired by the theme of war. Croxyy's Toy Market is dedicated to providing unique and high-quality products that cater to enthusiasts of all ages.</p>
    </section>

    <section id="contact">
        <h2>Contact Us</h2>
        <p>Have questions or inquiries? Feel free to reach out to us:</p>
        <form>
            <!-- Add your contact form fields here -->
            <!-- Example:
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>

            <input type="submit" value="Submit">
            -->
        </form>
    </section>

    <footer>
        <p>&copy; 2023 Croxyy's Toy Market. All rights reserved.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
}

header {
    background-color: #333;
    color: #fff;
    padding: 10px;
    text-align: center;
}

nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

nav li {
    display: inline;
    margin-right: 20px;
}

a {
    color: #fff;
    text-decoration: none;
}

section {
    padding: 40px;
}

.hero {
    text-align: center;
}

.product-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.product {
    width: 300px;
    margin: 20px;
}

footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 10px;
}
// Wait for the document to be ready
document.addEventListener("DOMContentLoaded", function() {
    // Get all elements with the class 'popup'
    var popups = document.querySelectorAll('.popup');

    // Function to check if an element is in the viewport
    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to animate pop-ups
    function animatePopups() {
        popups.forEach(function(popup) {
            if (isInViewport(popup)) {
                popup.classList.add('popup-visible');
            }
        });
    }

    // Add scroll event listener
    window.addEventListener('scroll', animatePopups);

    // Initial check for pop-ups on page load
    animatePopups();
});
<!-- Add this class to elements you want to animate -->
<div class="popup">
    <!-- Popup content goes here -->
</div>
.popup {
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 0.5s, transform 0.5s;
}

.popup-visible {
    opacity: 1;
    transform: translateY(0);
}
