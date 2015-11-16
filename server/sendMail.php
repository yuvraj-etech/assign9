<?php

require 'conn.php';
$today = date('Y-m-d');

$sql = "SELECT Task_name, userEmail, due_date FROM assign9_task WHERE due_date <= '$today' AND task_status = 'No'";
$result = mysqli_query($conn, $sql);


require '../assets/PHPMailer/PHPMailerAutoload.php';

while ($row = mysqli_fetch_assoc($result)) {
    $adminEmail = "yuvraj.singh96@gmail.com";
    $sub = 'Unfinished Task';
    $message = "Task : ".$row['Task_name']." Due Date: ".$row['due_date'];

    $mail = new PHPMailer;
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';     // SMTP Host Name
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'yuvraj.singh96@gmail.com';                 // SMTP username
    $mail->Password = 'priyanka143';                           // SMTP password
    $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 587;                                    // TCP port to connect to
    $mail->From = $adminEmail;
    $mail->FromName = 'Yuvraj';
    $mail->addAddress($row['userEmail']);     // Add a recipient
    $mail->addReplyTo($adminEmail, 'Yuvraj');
    $mail->Subject = $sub;
    $mail->Body = $message;
    if (!$mail->send()) {
        echo 'Some error occured, please try again later.';
        echo 'Mailer Error: ' . $mail->ErrorInfo;
    } else {
        echo 'Email Sent';
    }
}

mysqli_close($conn);
?>
