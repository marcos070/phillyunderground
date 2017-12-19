# api controller
class Api::V1::ExhibitsController < ApplicationController
  def index
    exhibits = Exhibit.all
    render json: { exhibits: exhibits }
  end
end
