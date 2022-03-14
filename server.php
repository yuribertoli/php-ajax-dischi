<?php

require __DIR__ . '/database.php';

header("Access-Control-Allow-Origin","*");
header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

header('Content-type: application/json');
echo json_encode($database);

?>