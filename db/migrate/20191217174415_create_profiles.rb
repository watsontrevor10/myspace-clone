class CreateProfiles < ActiveRecord::Migration[6.0]
  def change
    create_table :profiles do |t|
      t.string :name
      t.date :birthday
      t.string :avatar
      t.string :favorite_color
      t.string :relationship_status

      t.timestamps
    end
  end
end
