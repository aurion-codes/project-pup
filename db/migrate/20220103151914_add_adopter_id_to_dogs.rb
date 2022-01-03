class AddAdopterIdToDogs < ActiveRecord::Migration[6.1]
  def change
    add_column :dogs, :adopter_id, :integer
    add_index :dogs, :adopter_id
    add_column :dogs, :poster_id, :integer
    add_index :dogs, :poster_id
  end
end
