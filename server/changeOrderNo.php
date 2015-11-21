<?php

require 'conn.php';
//$userEmail = $_POST['userEmail']; 
$userEmail = 'yuvraj@gmail.com';
$numSql = "SELECT * FROM assign9_task WHERE userEmail = '$userEmail'";
$numResult = mysqli_query($conn, $numSql);
$numRows = mysqli_num_rows($numResult);
echo $numRows;


//$taskId = $_POST['taskId'];
//$newOrderNo = $_POST['newOrderNo'];
$newOrderNo = 0;

if ($newOrderNo == 0) {
    for($i=1;$i<=2;$i++)
  {
     $arr[$i] = $i;
  }


  foreach($arr as $randarray)
  {	
$update= mysqli_query($conn,"update assign9_task set orderNo=$randarray") or die(mysql_error());
  }
//    $i = 1;
//    for ($x = 0; $x<$numRows; $x++) { 
//        echo "i= ".$i." x".$x."<br>";
//        $sql = "UPDATE assign9_task SET orderNo = $i WHERE orderNo = $x AND userEmail = '$userEmail'";
//        mysqli_query($conn, $sql);
//        $i++;
//    }
}



//$sql = "UPDATE assign9_task SET orderNo = $newOrderNo WHERE id= $taskId;";
//
//if (mysqli_query($conn, $sql)) {
//    echo "Order Changed";
//} else {
//    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
//}


mysqli_close($conn);
?>
