function editar(obj){
	//Vamos selecionar o objeto e apartir dele o tr mais proximo. o Jquery vai voltando
	var tr = $(obj).closest('tr');
	
	//A partir dele vamos pegar as informações
	var nome = tr.attr('data-nome');
	var email = tr.attr('data-email');
	var senha = tr.attr('data-senha');
	var id = tr.attr('data-id');
	
	//Agora vamos preencher o formulário que já temos
	//Procuramos o modal-editar, dentro dele procuramos o modal-body e procuramos o name e colocamos seus valores
	$('#modal-editar').find('.modal-body').find('input[name=nome]').val(nome);
	$('#modal-editar').find('.modal-body').find('input[name=email]').val(email);
	$('#modal-editar').find('.modal-body').find('input[name=senha]').val(senha);
	$('#modal-editar').find('.modal-body').find('input[name=id]').val(id);
	
	//Depois acionamos uma ação submit, que vai executar uma função que recebe e
	$('#modal').find('.modal-body').find('form').on('submit', salvar);
	
	//Mostra o modal
	$('#modal-editar').modal('show');
	
	//Não precisamos mais do arquivo editar.php
	
}

function salvar(e){
	//Previne o evento padrão que ocorre
	e.preventDefault();
	
	//Pegar os dados do form manualmente
	var nome = $(this).find('input[name=nome]').val();
	var email = $(this).find('input[name=email]').val();
	var senha = $(this).find('input[name=senha]').val();
	var id = $(this).find('input[name=id]').val();
	
	//Fazer nova requisição ajax para enviar a um arquivo que vai salvar no banco de dados
	$.ajax({
		url:'salvar.php',
		type:'POST',
		data:{nome:nome, email:email, senha:senha, id:id},
		success:function(){
			//Mais uma função após ter sido salvo no banco de dados.
			alert("Dados alterados com sucesso");
			//Atualiza a tela
			window.location.href = window.location.href;
		}
	});
}

function excluir(id){
	$('#modal').find('.modal-body').html('Tem certeza que deseja excluir o id: '+id+'?<br/><button onclick="excluirUsuario('+id+')">Sim</button><button onclick="fechar()">Não</button>');
	$('#modal').modal('show');
}

function fechar(){
	$('#modal').modal('hide');
}

function excluirUsuario(id){
	$.ajax({
		url:'excluir.php',
		type:'POST',
		data:{id:id},
		success:function(){
			//Mais uma função após ter sido salvo no banco de dados.
			alert("Usuário excluído com sucesso");
			//Atualiza a tela
			window.location.href = window.location.href;
		}
	});
}





