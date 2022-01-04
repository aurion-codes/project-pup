class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.boolean :like, default: false
      t.references :user, foreign_key: true
      t.references :dog, foreign_key: true

      t.timestamps
    end
  end
end
