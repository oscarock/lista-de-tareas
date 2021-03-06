$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
  createTaks()
  completeTaks()
  deleteTaks()
});

function createTaks(){
	$('#form-1').on('submit',function(e){
		e.preventDefault()
		var form = this
		$.ajax({
			method: "POST",
			url: form.action,
			data: {
				title: form.title.value
			}
		}).done(function(response){
			$("#taks-load").append(response)
			$(".mensaje").addClass('alert-success').fadeIn().html('Tarea creada Correctamente.')
			$('#form-1')[0].reset()
		})
	})	
}

function completeTaks(){
	$('#taks-load').on('click', '.taks_complete',function(e){
		e.preventDefault()
		var link = this
		$.ajax({
			method: "GET",
			url: link.href,
		}).done(function(response){
			$("#tarea_" + response.taks.id).removeClass('tarea-pendiente').addClass('tarea-completada')
			$("#id_taks_" + response.taks.id).hide()
			$(".mensaje").addClass('alert-success').fadeIn().html('Tarea Terminada.')
		})
	})
}

function deleteTaks(){
	$("#taks-load").on('click','.taks_delete',function(e){
		e.preventDefault()
		var link = this
		$.ajax({
			method: "GET",
			url: link.href,
		}).done(function(response){
			$('#tarea_' + link.id).remove()
			$(".mensaje").addClass('alert-danger').fadeIn().html('Tarea Eliminada.')
		})
	})
}
