<?php

include_once "../php/classe.php";


if($_SERVER['REQUEST_METHOD'] == "POST"){

    $id = $_POST['id'];

   

    echo header('Content-Type: application/json');


    if($id){

        $novo = new Database("localhost","root","","banco_dados");

        $insertresult = $novo->delete($id,"lista");

    }
    
    


   // echo header("location:../html/index.php");
   echo  json_encode($id);

  
}