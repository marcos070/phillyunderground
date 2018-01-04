class Api::V1::CheckoutsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    checkouts = Checkout.all
    render json: { checkouts: checkouts }
  end

  def create
binding.pry
    cart = ShoppingCart.new
    cart.user = current_user
    cart.save
    checkout = Checkout.new(checkout_params)
    checkout.exhibit_id = Exhibit.find(params[:exhibit_id])
    checkout.shopping_cart_id = cart.id
    binding.pry
    if checkout.save
      render json: cart
    else
      render json:
        { errors: cart.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def checkout_params
    params.require(:checkout).permit(
      :quantity,
      :size,
      :exhibit_id
    )
  end
end
