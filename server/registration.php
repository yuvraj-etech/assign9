<?php
require 'conn.php';

$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];
$password = sha1($password);
// Create connection


$sql = "SELECT * FROM assign9_user WHERE email='$email'";
$result = mysqli_query($conn, $sql);
$num_rows = mysqli_num_rows($result);
//echo $num_rows;
if ($num_rows == 1) {
    echo "User Email already register";
} 
else {

    $sql = "INSERT INTO assign9_user (name, email, password) VALUES ('$name', '$email', '$password')";

    if (mysqli_query($conn, $sql)) {
        echo "Successfully Registered";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
}

mysqli_close($conn);
?>
