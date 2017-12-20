class ShoppingCart < ActiveRecord::Migration[5.1]
  def change
    create_table :shopping_cart do |t|
      t.references :user, null: false

      t.timestamps
    end
  end
end
