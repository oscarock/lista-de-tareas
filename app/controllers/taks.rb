require "make_todo"

get "/" do
  @taks = Tarea.all
	erb :index
end


post "/taks" do
	taks = Tarea.create(params[:title])
	erb :"_taks", layout: false, locals: {new_taks: taks}
end