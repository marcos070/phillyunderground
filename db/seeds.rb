# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Exhibit.destroy_all

exhibits = [
  {
    artist_name: "Bryce Hudson",
    title: "Geometric Abstraction - Untitled (#46)",
    price: 49.99,
    genre: "Modern",
    image_url: "http://www.brycehudson.com/wp-content/uploads/2015/03/Composition-46-Abstract-Geometric-Art-Painting-by-Bryce-Hudson-16x20.jpg"
  },
  {
    artist_name: "Chuck Elliott",
    title: "ReVOX",
    price: 150.0,
    genre: "Modern",
    image_url: "http://womenartdealers.org/wp-content/uploads/2014/01/Modern-Art-Buyer-Chuck-Elliott.jpg"
  },
  {
    artist_name: "Peter Baranowski",
    title: "Humanite",
    price: 75.0,
    genre: "Modern",
    image_url: "https://i.pinimg.com/originals/62/4c/2d/624c2dd0c55f616cd48e927c463e433a.jpg"
  },
  {
    artist_name: "Emma Lambert",
    title: "Abstract Oil Painting",
    price: 85.00,
    genre: "Abstract",
    image_url: "https://images.fineartamerica.com/images-medium-large-5/10-abstract-oil-painting-modern-contemporary-art-house-wall-deco-by-emma-lambert-emma-lambert.jpg"
  },
  {
    artist_name: "Vikki Jones",
    title: "Untitled",
    price: 85.00,
    genre: "Photography",
    image_url: "https://c1.staticflickr.com/1/248/454443635_abdac76e05.jpg"
  },
  {
    artist_name: "Roof Topper",
    title: "i'll make ya famous",
    price: 45.00,
    genre: "Photography",
    image_url: "http://www.cruzine.com/wp-content/uploads/2011/11/039-modern-urban-photography.jpg"
  }
]

exhibits.each do |e|
  Exhibit.create(
    artist_name: e[:artist_name],
    title: e[:title],
    price: e[:price],
    genre: e[:genre],
    image_url: e[:image_url])
end
