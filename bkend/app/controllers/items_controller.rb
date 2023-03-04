class ItemsController < ApplicationController
	def all
		render :json => Item.all
	end
end
