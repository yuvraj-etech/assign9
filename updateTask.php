<?php
require 'conn.php';


$taskId = $_POST['taskId'];
$newTaskName = $_POST['newTaskName'];
$newDueDate = $_POST['newDueDate'];

$sql = "UPDATE assign9_task SET task_name = '$newTaskName', due_date = '$newDueDate' WHERE id = $taskId";
//    $sql = "INSERT INTO assign9_task (task_name, due_date, userEmail) VALUES ('$taskName', '$dueDate', '$userEmail')";

    if (mysqli_query($conn, $sql)) {
        echo "Task Updates";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }


mysqli_close($conn);
?>