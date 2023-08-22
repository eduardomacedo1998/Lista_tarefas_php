<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "banco_dados";

$conn = new mysqli($servername, $username, $password, $dbname);


$sql = "SELECT * FROM lista";
$result = $conn->query($sql);

if ($result->num_rows > 0){


    $data = array();
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
    echo json_encode($data);
     
}else{


}
