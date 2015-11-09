<?php

require 'conn.php';

$email = $_POST['email'];
$password = $_POST['password'];
$password = sha1($password);

$sql = "SELECT * FROM assign9_user WHERE (email = '$email') AND (password = '$password');";
$result = mysqli_query($conn, $sql);

$count = mysqli_num_rows($result);
if ($count == 1) {
    echo "Login Successfully";
} else {
    echo "Wrong Username and Password";
}


mysqli_close($conn);
?>