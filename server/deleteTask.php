<?php
require 'conn.php';
$email = $_POST['email'];
$taskId = $_POST['taskId'];
$sql1 = "DELETE FROM assign9_task WHERE id = $taskId";
$result1 = mysqli_query($conn, $sql1);

echo 'Task Deleted';
mysqli_close($conn);
?>