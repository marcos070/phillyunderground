class CreateCheckout < ActiveRecord::Migration[5.1]
  def change
    create_table :checkouts do |t|
      t.references :exhibit, null: false
      t.references :shopping_cart, null: false

      t.timestamps
    end
  end
end
