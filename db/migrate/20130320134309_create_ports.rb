class CreatePorts < ActiveRecord::Migration
  def change
    create_table :ports do |t|
      t.string "name", :limit => 10, :null => false, :unique => true
      t.float "longitude", :limit => 10
      t.float "latitude", :limit => 10
      t.timestamps
    end
    add_index("ports","name")
  end
end
