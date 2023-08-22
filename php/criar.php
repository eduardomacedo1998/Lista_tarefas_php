<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "banco_dados";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $tarefa = $_POST["tarefa"];
    $verificacao = "pendente";

    // Usar declaração preparada para evitar injeção de SQL
    $stmt = $conn->prepare("INSERT INTO lista(tarefa, verificacao) VALUES (?, ?)");
    $stmt->bind_param("ss", $tarefa, $verificacao);
    $result = $stmt->execute();

    echo header("location:../html/index.php");

        }


?>
