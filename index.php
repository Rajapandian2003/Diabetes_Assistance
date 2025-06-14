<?php
session_start();

if (!isset($_SESSION['loggedin'])) {
    header("location: login.html"); // Redirect to login if not logged in
    exit;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Diabetes Assistance</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <nav class="navbar">
            <div class="logo">Diabetes Assistance</div>
            <div id="menu-icon" class="menu-icon">&#9776;</div>
            <ul class="nav-links">
                <li><a href="index.php">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="index.html">Logout</a></li>
            </ul>
        </nav>
    </header>

    <section class="hero">
        <div class="hero-content">
            <h1>WELCOME TO DIABETES ASSISTANCE PORTAL</h1>
            <p>Empowering you to take control of your health with diabetes care.</p>
            <p>Then What's Your Suger Level</p>
            <div class="form-container">
                <a href="test.html" class="btn">Test Right Now</a>
            </div>
        </div>
    </section>

    <footer>
        <p>&copy; 2024 Diabetes Portal. All Rights Reserved.</p>
    </footer>

    
</body>
</html>
