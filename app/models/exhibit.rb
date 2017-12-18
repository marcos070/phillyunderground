class Exhibit < ApplicationRecord
  # belongs_to :venue
  # belongs_to :user
  # has_many :votes

  validates_presence_of :artist_name, :title, :price, :image_url

  # validates :rating,
  #           numericality: true,
  #           inclusion: 1..5
end
