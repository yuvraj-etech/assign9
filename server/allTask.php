<?php
require 'conn.php';

$email = $_POST['email'];
$sql = "SELECT id, task_name, due_date, task_status, orderNo FROM assign9_task WHERE userEmail = '$email' ORDER BY orderNo";
$result = mysqli_query($conn, $sql);


$output = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($output != "") {$output .= ",";}
    $output .= '{"id":"'  . $rs["id"] . '",';
    $output .= '"task_name":"'   . $rs["task_name"]        . '",';
    $output .= '"due_date":"'   . $rs["due_date"]        . '",';
    $output .= '"task_status":"'   . $rs["task_status"]        . '",';
    $output .= '"order":"'   . $rs["orderNo"]        . '",';
    $output .= '"nodes":[]}';
}
$output ='['.$output.']';

echo $output;
//$output = array();
//while($row = mysqli_fetch_assoc($result)) {
//    $output[] = $row;
//}
//
//echo json_encode($output);
mysqli_close($conn);
//echo $output;
?>