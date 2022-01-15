class ModifyDefaultCheck < ActiveRecord::Migration[6.1]
  def change
    change_column_default :todos, :check, from: true, to: false
  end
end
