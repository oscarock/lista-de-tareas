require "make_todo"

get "/" do
  @taks = Tarea.all

  erb :index
end
