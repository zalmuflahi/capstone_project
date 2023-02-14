class LikesController < ApplicationController
  before_action :authenticate, only: [:create]

end
