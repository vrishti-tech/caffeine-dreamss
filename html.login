<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Caffeine Dreams - Premium Coffee Shop</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body class="theme1">

<!-- NAVIGATION -->
<nav class="navbar">
    <div class="nav-container">
        <a href="index.html" class="logo-section">
            <div class="coffee-logo">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="cupGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style="stop-color:#8B4513;stop-opacity:1" />
                            <stop offset="100%" style="stop-color:#654321;stop-opacity:1" />
                        </linearGradient>
                    </defs>
                    <path d="M 20 25 L 20 75 Q 20 85 30 85 L 70 85 Q 80 85 80 75 L 80 25 Z" fill="url(#cupGradient)" stroke="#654321" stroke-width="2"/>
                    <path d="M 80 40 Q 95 40 95 55 Q 95 70 80 70" fill="none" stroke="#8B4513" stroke-width="3"/>
                    <path d="M 25 30 L 25 70 Q 25 80 30 80 L 70 80 Q 75 80 75 70 L 75 30 Z" fill="#4A2511" opacity="0.7"/>
                    <path d="M 35 20 Q 35 10 40 10" fill="none" stroke="#D4A574" stroke-width="2" stroke-linecap="round" opacity="0.8"/>
                    <path d="M 50 18 Q 50 8 55 8" fill="none" stroke="#D4A574" stroke-width="2" stroke-linecap="round" opacity="0.8"/>
                    <path d="M 65 20 Q 65 10 70 10" fill="none" stroke="#D4A574" stroke-width="2" stroke-linecap="round" opacity="0.8"/>
                </svg>
            </div>
            <span class="brand-name">? Caffeine Dreams</span>
        </a>
        
        <ul class="nav-menu">
            <li><a href="#home" class="nav-link">Home</a></li>
            <li><a href="#about" class="nav-link">About</a></li>
            <li><a href="#menu" class="nav-link">Menu</a></li>
            <li><a href="#contact" class="nav-link">Contact</a></li>
            <li id="authNav"><a href="login.html" class="btn-login">Login</a></li>
            <li id="userNav" style="display:none;" class="user-nav">
                <span class="user-email"></span>
                <a href="dashboard.html" class="btn-dashboard">Dashboard</a>
                <button class="btn-logout" onclick="logout()">Logout</button>
            </li>
        </ul>
    </div>
</nav>

<!-- HERO SECTION -->
<section id="home" class="hero">
    <div class="hero-content">
        <div class="hero-logo">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="cupGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#8B4513;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#654321;stop-opacity:1" />
                    </linearGradient>
                </defs>
                <path d="M 20 25 L 20 75 Q 20 85 30 85 L 70 85 Q 80 85 80 75 L 80 25 Z" fill="url(#cupGradient2)" stroke="currentColor" stroke-width="2"/>
                <path d="M 80 40 Q 95 40 95 55 Q 95 70 80 70" fill="none" stroke="currentColor" stroke-width="3"/>
                <path d="M 25 30 L 25 70 Q 25 80 30 80 L 70 80 Q 75 80 75 70 L 75 30 Z" fill="currentColor" opacity="0.4"/>
                <path d="M 35 20 Q 35 10 40 10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <path d="M 50 18 Q 50 8 55 8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <path d="M 65 20 Q 65 10 70 10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
        </div>
        <h1 class="hero-title">Caffeine Dreams</h1>
        <p class="hero-subtitle">Experience the Finest Coffee Crafted with Passion</p>
        <a href="login.html" class="cta-button">Order Now</a>
    </div>
</section>

<!-- ABOUT SECTION -->
<section id="about" class="about">
    <div class="container">
        <h2>About Us</h2>
        <p>At Caffeine Dreams, we believe that great coffee is more than just a beverage—it's an experience. Our master baristas carefully select the finest beans from around the world and roast them to perfection.</p>
        <div class="features">
            <div class="feature">
                <div class="feature-icon">??</div>
                <h3>Premium Beans</h3>
                <p>Sourced from the best coffee plantations worldwide</p>
            </div>
            <div class="feature">
                <div class="feature-icon">?</div>
                <h3>Expert Baristas</h3>
                <p>Skilled professionals crafting your perfect cup</p>
            </div>
            <div class="feature">
                <div class="feature-icon">??</div>
                <h3>Fast Delivery</h3>
                <p>Fresh coffee delivered to your doorstep quickly</p>
            </div>
            <div class="feature">
                <div class="feature-icon">??</div>
                <h3>Secure Payment</h3>
                <p>Safe and encrypted transactions</p>
            </div>
        </div>
    </div>
</section>

<!-- MENU PREVIEW SECTION -->
<section id="menu" class="menu-preview">
    <div class="container">
        <h2>Featured Menu Items</h2>
        <div class="featured-items">
            <div class="menu-card">
                <div class="card-image">?</div>
                <h3>Classic Cappuccino</h3>
                <p>Espresso with steamed milk & foam</p>
                <span class="price">?180</span>
            </div>
            <div class="menu-card">
                <div class="card-image">??</div>
                <h3>Strawberry Latte</h3>
                <p>Fresh strawberry with creamy latte</p>
                <span class="price">?210</span>
            </div>
            <div class="menu-card">
                <div class="card-image">??</div>
                <h3>Chocolate Mocha</h3>
                <p>Rich chocolate with espresso blend</p>
                <span class="price">?230</span>
            </div>
            <div class="menu-card">
                <div class="card-image">??</div>
                <h3>Affogato</h3>
                <p>Ice cream with hot espresso</p>
                <span class="price">?240</span>
            </div>
        </div>
        <a href="login.html" class="cta-button">View Full Menu</a>
    </div>
</section>

<!-- CONTACT SECTION -->
<section id="contact" class="contact">
    <div class="container">
        <h2>Get In Touch</h2>
        <div class="contact-info">
            <div class="info-item">
                <h3>?? Location</h3>
                <p>123 Coffee Street<br>Dream City, DC 12345</p>
            </div>
            <div class="info-item">
                <h3>?? Phone</h3>
                <p>+1 (555) 123-4567</p>
            </div>
            <div class="info-item">
                <h3>?? Email</h3>
                <p>hello@caffeinedreams.com</p>
            </div>
            <div class="info-item">
                <h3>?? Hours</h3>
                <p>Mon-Fri: 7AM - 10PM<br>Sat-Sun: 8AM - 11PM</p>
            </div>
        </div>
    </div>
</section>

<!-- FOOTER -->
<footer class="footer">
    <div class="container">
        <p>&copy; 2026 Caffeine Dreams. All rights reserved.</p>
        <p>Premium Coffee Experience | Delivered Fresh</p>
    </div>
</footer>

<script src="home.js"></script>
</body>
</html>