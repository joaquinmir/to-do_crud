module Api
	class TodosController < ApplicationController

		def index
			@todos = Todo.where(folder_id: (params[:folder_id]))

			render json: @todos
		end

		def show
			@todo = Todo.where(id: (params[:id]))

			render json: @todo
		end

		def create
			todo = Folder.find(params[:folder_id]).todos.new(todos_create_params)
			if todo.save
				render json: todo
			else
				render json: {error: todo.errors.messages}, status:422
			end
		end

		def destroy
			todo = Todo.find(params[:id])

			if todo.destroy
				head:no_content
			else
				render json: {error: todo.errors.messages}, status:422
			end
		end

		def update 
			todo = Todo.find(params[:id])

			if todo.update(todos_update_params)
				render json: todo
			else
				render json: {error: todo.errors.messages}, status:422
			end
		end

		private 

		def todos_create_params
			params.require(:todo).permit(:content, :folder_id)
		end

		def todos_update_params
			params.require(:todo).permit(:content, :check)
		end
	end
end