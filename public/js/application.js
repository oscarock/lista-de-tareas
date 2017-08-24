$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
  createTaks()
  completeTaks()
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
		}).fail(function(response){
			console.log("errores" + response)
		})
	})	
}

function completeTaks(){
	$('#taks-load').on('click', '#taks_complete',function(e){
		e.preventDefault()
		var link = this
		console.log(link)
		$.ajax({
			method: "GET",
			url: link.href,
		}).done(function(response){
			$(".mensaje").fadeIn().html(response.status)
		})
	})
}