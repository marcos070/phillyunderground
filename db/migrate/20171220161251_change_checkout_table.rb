class ChangeCheckoutTable < ActiveRecord::Migration[5.1]
  def change
    rename_table :shopping_cart, :shopping_carts
  end
end
