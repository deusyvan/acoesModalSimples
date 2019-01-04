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
			$('#modal').find('.modal-body').find('form').on('submit',function(e){
				//Previne o evento padrão que ocorre
				e.preventDefault();
				
				//Pegar os dados do form manualmente
				var nome = $(this).find('input[name=nome]').val();
				var email = $(this).find('input[name=email]').val();
				var senha = $(this).find('input[name=senha]').val();
				
				//Fazer nova requisição ajax para enviar a um arquivo que vai salvar no banco de dados
				$.ajax({
					url:'salvar.php',
					type:'POST',
					data:{nome:nome, email:email, senha:senha}
				});
				
			});
			$('#modal').modal('show');
		}
		
	});
		
}

function excluir(id){
	$('#modal').modal('show');
}