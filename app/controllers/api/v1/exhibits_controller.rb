# api controller
class Api::V1::ExhibitsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :authenticate_user!, except: [:index, :show]

  def index
    exhibits = Exhibit.all
    render json: { exhibits: exhibits }
  end

  def show
    exhibit = Exhibit.find(params[:id])
    render json: exhibit
  end

  def create
    exhibit = Exhibit.new(exhibit_params)
    if exhibit.save
      render json: exhibit
    else
      render json: { error: exhibit.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    if Exhibit.update(params[:id], exhibit_params)
      exhibit = Exhibit.find(params[:id])
      render json: exhibit
    else
      render json: { error: exhibit.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def exhibit_params
    params.require(:exhibit).permit(
      :artist_name,
      :title,
      :price,
      :genre,
      :image_url
    )
  end
end
