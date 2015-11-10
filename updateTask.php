<?php
require 'conn.php';


$taskId = $_POST['taskId'];
$newTaskName = $_POST['newTaskName'];
$newDueDate = $_POST['newDueDate'];
$newTaskStatus = $_POST['newTaskStatus'];

$sql = "UPDATE assign9_task SET task_name = '$newTaskName', due_date = '$newDueDate', task_status = '$newTaskStatus' WHERE id = $taskId";

    if (mysqli_query($conn, $sql)) {
        echo "Task Updates";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }


mysqli_close($conn);
?>