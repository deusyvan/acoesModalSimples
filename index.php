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
		<script type="text/javascript" src="assets/js/jquery.min.js" ></script>
		<script type="text/javascript" src="assets/js/bootstrap.min.js" ></script>
		<script type="text/javascript" src="assets/js/javascript.js" ></script>	
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
        			<a href="javascript:;" onclick="editar('<?php echo $usuario['id']; ?>')">Editar</a>
        			<a href="javascript:;" onclick="excluir('<?php echo $usuario['id']; ?>')">Excluir</a>
        		</td>
        	</tr>
        	<?php endforeach; ?>
        </table>
        
        <div id="modal-editar" class="modal fade" role="dialog">
        	<div class="modal-dialog">
        		<div class="modal-content">
        			<div class="modal-body">
        				<form method="POST">
                       		Nome: <br/>
                       		<input type="text" name="nome"/><br/><br/>
                       		Email: <br/>
                       		<input type="text" name="email"/><br/><br/>
                       		Senha: <br/>
                       		<input type="text" name="senha"/><br/><br/>
                       		
                       		<input type="hidden" name="id"/>
                       		
                       		<input type="submit" value="Salvar" />
                       	
                       	</form>
        			</div>
        		</div>
        	</div>
        </div>
        
        <div id="modal" class="modal fade" role="dialog">
        	<div class="modal-dialog">
        		<div class="modal-content">
        			<div class="modal-body">...</div>
        		</div>
        	</div>
        </div>
        
	</body>
</html>