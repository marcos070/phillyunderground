#checkout model
class Checkout < ApplicationRecord
  belongs_to :exhibit
  belongs_to :shopping_cart
end
