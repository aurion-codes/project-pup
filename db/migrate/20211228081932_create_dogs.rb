class CreateDogs < ActiveRecord::Migration[6.1]
  def change
    create_table :dogs do |t|
      t.string :name
      t.string :gender
      t.string :dob
      t.string :breed
      t.string :bio
      t.string :img_url
      t.boolean :adopted
      t.boolean :vaccinated

      t.timestamps
    end
  end
end
