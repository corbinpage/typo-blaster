class CreateTypos < ActiveRecord::Migration
  def change
    create_table :typos do |t|
      t.string :status
      t.string :user_email
      t.text :highlighted_text
      t.text :complete_text
      t.text :comments
      t.text :url
      t.references :domain, index: true
      t.datetime :email_date

      t.timestamps
    end
  end
end
