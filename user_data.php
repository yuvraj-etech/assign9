<?php
require 'conn.php';

$email = $_POST['email'];
$sql = "SELECT id, name, email FROM assign9_user WHERE email = '$email'";
$result = mysqli_query($conn, $sql);


$output = array();
while($row = mysqli_fetch_assoc($result)) {
    $output[] = $row;
}

echo json_encode($output);
mysqli_close($conn);
//echo $output;
?>