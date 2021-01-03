class CreateSampleCreditTypes < ActiveRecord::Migration[5.2]
  def change
    create_table :sample_credit_types do |t|
      t.string :credit_type, null: false
      t.string :description

      t.timestamps
    end
    add_index :sample_credit_types, :credit_type, unique: true
  end
end
