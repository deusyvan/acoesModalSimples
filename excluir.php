<?php
$pdo = new PDO("mysql:dbname=acoesmodal;charset=utf8;host=localhost", "admin", "admin@12");

$id = $_POST['id'];

$pdo->query("DELETE FROM usuarios WHERE id = '$id'");

?>