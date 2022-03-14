<?php

require __DIR__ . '/database.php';

/* header("Access-Control-Allow-Origin","*");
header("Access-Control-Allow-Methods","GET,PUT,POST,DELETE");
header("Access-Control-Allow-Headers","Content-Type"); */
header('Content-type: application/json');
echo json_encode($database);

?>