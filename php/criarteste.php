<?php

include_once "../classe.php";


if($_SERVER['REQUEST_METHOD'] == "POST"){

    $tarefa = $_POST['tarefa'];

    $dados['tarefa'] = $tarefa;
    $dados['verificacao']= "pendente";
    
    header('Content-Type: application/json');

    
    
    
    $db = new Database("localhost","root","","banco_dados");

    $insertresult = $db->insert("lista",$dados);


    echo header("location:../html/index.php");


  
}



