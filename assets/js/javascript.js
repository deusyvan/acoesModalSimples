function editar(id){
	$.ajax({
		url:'editar.php',
		type:'POST',
		data:{id:id},
		beforeSend:function(){
			//Antes de fazer a requisição ajax com html vamos fazer algo antes
			$('#modal').find('.modal-body').html('Carregando ...');
			$('#modal').modal('show');
		},
		success:function(html){
			//Pegando o html para colocar dentro do modal (na tela)
			$('#modal').find('.modal-body').html(html);
			
			//Procuramos dentro do modal-body um form que está lá dentro
			//Depois acionamos uma ação submit, que vai executar uma função que recebe e
			$('#modal').find('.modal-body').find('form').on('submit', salvar);
			$('#modal').modal('show');
		}
		
	});
		
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
	$('#modal').find('.modal-body').html('Tem certeza que deseja excluir o id: '+id+'?<br/><button>Sim</button><button>Não</button>');
	$('#modal').modal('show');
}