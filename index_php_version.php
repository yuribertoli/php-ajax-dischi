<?php 
    require __DIR__ . '/database.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>php dischi</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    
    <header>
        
        <img src="./spotify-logo.png" alt="Spotify Logo">  

    </header>

    <main>

        <div class="container albums">

            <?php

                foreach($database as $album) {
                    echo "<div class='card'>" . 
                            "<img " . "src='" . $album['poster'] . "'>" .
                            "<h3>" . $album['title'] . "</h3>" .
                            "<span>" . $album['author'] . "</span>" .
                            "<span>" . $album['year'] . "</span>" .
                         "</div>";
                }

            ?>

        </div>

    </main>

</body>
</html>