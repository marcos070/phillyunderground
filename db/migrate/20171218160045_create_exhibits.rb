class CreateExhibits < ActiveRecord::Migration[5.1]
  def change
    create_table :exhibits do |t|
      t.string :artist_name, null: false
      t.string :title, null: false
      t.float :price, null: false
      t.string :genre
      t.string :image_url, null: false

      t.timestamps
    end
  end
end
