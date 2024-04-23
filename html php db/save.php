<?php
// Database connection parameters
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Extract form data
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$email = $_POST['email'];
$dob = $_POST['dob'];

// Prepare SQL statement to insert data into the users table
$sql = "INSERT INTO users (first_name, last_name, email, dob) VALUES ('$firstName', '$lastName', '$email', '$dob')";

// Execute SQL statement
if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close connection
$conn->close();
?>
