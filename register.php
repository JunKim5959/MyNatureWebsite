<?php
include "connect.php";

$email = $_POST['email'];
$password = $_POST['password'];

$sql = "INSERT INTO Customers (email_address, login_password) VALUES ('$email', '$password')";
if (mysqli_query($conn, $sql)) {
    echo "Registration successful. <a href='login.html'>Login here</a>";
} else {
    echo "Error: " . mysqli_error($conn);
}
?>