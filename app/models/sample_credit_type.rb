# == Schema Information
#
# Table name: sample_credit_types
#
#  id          :bigint           not null, primary key
#  credit_type        :string           not null
#  description :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class SampleCreditType < ApplicationRecord
  validates :credit_type, presence: true

  has_many :sample_credits,
    class_name: :SampleCredit,
    foreign_key: :sample_credit_type_id

  def name
    self.credit_type
  end
end
