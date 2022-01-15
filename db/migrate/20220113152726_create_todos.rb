class CreateTodos < ActiveRecord::Migration[6.1]
  def change
    create_table :todos do |t|
      t.string :content
      t.boolean :check
      t.belongs_to :folder, null: false, foreign_key: true

      t.timestamps
    end
  end
end
