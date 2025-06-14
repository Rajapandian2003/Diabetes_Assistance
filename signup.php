<?php
include 'db.php'; // Include the database connection

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT); // Hash the password

    // Check if email already exists
    $sql = "SELECT * FROM 
     users WHERE email='$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        echo "Email already registered. Please use a different email.";
    } else {
        // Insert user into database
        $sql = "INSERT INTO users (name, email, password) VALUES ('$name', '$email', '$password')";
        if ($conn->query($sql) === TRUE) {
            // Redirect to login page
            header("Location: login.html");
            exit();
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }
}
$conn->close();
?>
