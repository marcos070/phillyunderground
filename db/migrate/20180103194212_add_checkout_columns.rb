class AddCheckoutColumns < ActiveRecord::Migration[5.1]
  def change
    add_column :checkouts, :quantity, :string
    add_column :checkouts, :size, :string
  end
end
