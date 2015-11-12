<?php
// Create connection
$conn = mysqli_connect('localhost', 'root', 123, 'users');
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>