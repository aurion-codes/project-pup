class CreateDogs < ActiveRecord::Migration[6.1]
  
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :username
      t.string :password_digest

      t.timestamps
    end
    create_table :dogs do |t|
      t.string :name
      t.string :gender
      t.string :dob
      t.string :breed
      t.string :bio
      t.string :img_url
      t.boolean :adopted
      t.boolean :vaccinated
      t.references :user, foreign_key: true
      



      t.timestamps
    end
  end
end
