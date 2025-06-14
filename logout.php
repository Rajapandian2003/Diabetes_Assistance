<?php
session_start();
session_destroy(); // Destroy the session
header("location: login.html"); // Redirect to login page
exit;
?>
