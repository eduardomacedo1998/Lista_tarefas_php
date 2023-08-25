<?php 

include_once "../php/classe.php";


if($_SERVER['REQUEST_METHOD'] == "POST"){

    $id = $_POST['id'];

   


    if($id){

        $metodofinalizar = new Database("localhost", "root", "", "banco_dados");

        $metodofinalizar->updateVerificationStatus("lista",$id,"finalizado");

    }







}