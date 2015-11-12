<?php
require 'conn.php';
$email = $_POST['email'];
$taskId = $_POST['taskId'];
$sql1 = "DELETE FROM assign9_task WHERE id = $taskId";
$result1 = mysqli_query($conn, $sql1);
$sql = "SELECT id, task_name, due_date, task_status FROM assign9_task WHERE userEmail = '$email' ORDER BY id DESC";
$result = mysqli_query($conn, $sql);


$output = array();
while($row = mysqli_fetch_assoc($result)) {
    $output[] = $row;
}

echo json_encode($output);
mysqli_close($conn);
?>