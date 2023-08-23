<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../css/style23.css">
<body>

   <?php include_once "../php/criarteste.php";  ?>

    <ul id="Lista"></ul>

    <form action="../php/criarteste.php" method="POST">
        
        <input type="text" id="tarefa" name="tarefa" placeholder="adicione nova tarefa" required>

        <button type="submit">Adicionar tarefa</button>
    </form>

    <div id="ul"></div>
    

    
<script src="../js/script.js"></script>
</body>
</html>