<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../css/style27.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

<body>



    <ul id="Lista"></ul>

    <form action="../php/criarteste.php" method="POST">
        
        <input type="text" id="tarefa" name="tarefa" placeholder="adicione nova tarefa" required>

        <button type="submit">Adicionar tarefa</button>
    </form>

    <div id="ul"></div>

    <?php include_once "../php/delet.php"; ?>
    

    
<script src="../js/scriptawe.js"></script>
</body>
</html>