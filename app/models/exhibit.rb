class Exhibit < ApplicationRecord
  has_many :checkouts
  has_many :shopping_carts, through: :checkouts

  validates_presence_of :artist_name, :title, :price, :image_url
end
