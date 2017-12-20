# shopping cart model
class ShoppingCart < ApplicationRecord
  belongs_to :user
  has_many :checkouts
  has_many :exhibits, through: :checkouts
end
