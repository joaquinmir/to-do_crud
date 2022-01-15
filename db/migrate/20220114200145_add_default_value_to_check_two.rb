class AddDefaultValueToCheckTwo < ActiveRecord::Migration[6.1]
  def change
    change_column_default :todos, :check, to: false
  end
end
