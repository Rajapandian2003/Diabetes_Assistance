<?php
session_start(); // Start the session
include 'db.php'; // Include the database connection

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Check if email exists
    $sql = "SELECT * FROM users WHERE email='$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        // Verify the password
        if (password_verify($password, $row['password'])) {
            $_SESSION['loggedin'] = true;
            $_SESSION['name'] = $row['name'];
            header("location: index.php"); // Redirect to index page
            exit;
        } else {
            echo "Incorrect password. Please try again.";
        }
    } else {
        echo "No account found with that email. Please sign up.";
    }
}
$conn->close();
?>
