<?php

include_once "../php/classe.php";

$selectdados = new Database("localhost", "root", "", "banco_dados");




$dados= $selectdados->select("lista");

echo json_encode($dados);


 