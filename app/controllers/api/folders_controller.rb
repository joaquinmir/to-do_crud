module Api
	class FoldersController < ApplicationController

		
		
		def index
			@folders = Folder.all 

			render json: @folders
		end

		def show
			@folder = Folder.find(params[:id])

			render json: @folder
		end

		def create
			@folder = Folder.new(folder_params)

			if @folder.save
				render json: @folder
			else
				render json: {error: @folder.errors.messages}, status:422
			end
		end

		def destroy
			@folder = Folder.find(params[:id])

			if @folder.destroy
				head :no_content
			else
				render json: {error: @folder.errors.messages}, status:422
			end
		end

		def get_todos
			@folder = Folder.find(params[:id])

			render json: @folder.todos
		end

		private

		def folder_params
			params.require(:folder).permit(:name)
		end
	end
end