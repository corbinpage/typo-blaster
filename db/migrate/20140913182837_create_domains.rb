class CreateDomains < ActiveRecord::Migration
  def change
    create_table :domains do |t|
      t.string :name
      t.string :url
      t.string :email
      t.string :string

      t.timestamps
    end
  end
end
