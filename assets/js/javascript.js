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
			//Pegando o html para colocar dentro do modal
			$('#modal').find('.modal-body').html(html);
			$('#modal').modal('show');
		}
		
	});
		
}

function excluir(id){
	$('#modal').modal('show');
}