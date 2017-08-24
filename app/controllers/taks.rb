require "make_todo"

get "/" do
  @taks = Tarea.all
	erb :index
end


post "/taks" do
	taks = Tarea.create(params[:title])
	erb :"_taks", layout: false, locals: {new_taks: taks}
end


get "/taks/complete/:id" do
	taks = Tarea.find(params[:id])
	taks['done'] = true
	Tarea.update(taks['id'])
	content_type :json
	{status: "Tarea Completada"}.to_json
end