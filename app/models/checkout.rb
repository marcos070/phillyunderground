# checkout model
class Checkout < ApplicationRecord
  belongs_to :exhibit
  belongs_to :shopping_cart

  validates_presence_of :user_id, :exhibit_id, :quantity, :size
end
