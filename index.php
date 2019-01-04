<?php
$pdo = new PDO("mysql:dbname=acoesmodal;charset=utf8;host=localhost", "admin", "admin@12");
$sql = $pdo->query("SELECT * FROM usuarios");
$usuarios = $sql->fetchAll();

?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>AÇÕES MODAL</title>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css" />
		<link rel="stylesheet" type="text/css" href="assets/css/style.css" />
		<script type="text/javascript" src="<?php echo BASE_URL; ?>assets/js/jquery.min.js" ></script>
		<script type="text/javascript" src="<?php echo BASE_URL; ?>assets/js/bootstrap.min.js" ></script>
		<script type="text/javascript" src="<?php echo BASE_URL; ?>assets/js/javascript.js" ></script>	
	</head>
	
	<body>
		<h1>Usuários</h1>
        <table border="1" width="500">
        	<?php foreach ($usuarios as $usuario): ?>
        	<tr>
        		<td><?php echo $usuario['nome']; ?></td>
        		<td><?php echo $usuario['email']; ?></td>
        		<td><?php echo $usuario['senha']; ?></td>
        		<td>
        			<a href="javascript:;" >Editar</a>
        			<a href="javascript:;" >Excluir</a>
        		</td>
        	</tr>
        	<?php endforeach; ?>
        </table>
        
        <div id="modal" class="modal fade" role="dialog">
        	<div class="modal-dialog">
        		<div class="modal-content">
        			<div class="modal-body">...</div>
        		</div>
        	</div>
        </div>
	</body>
</html>