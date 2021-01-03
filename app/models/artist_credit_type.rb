# == Schema Information
#
# Table name: artist_credit_types
#
#  id      :bigint       not null, primary key
#  credit_type    :string       not null
#  description :string
#  created_at  :datetime     not null
#  updated_at  :datetime     not null
#
class ArtistCreditType < ApplicationRecord
  validates :credit_type, presence: true

  has_many :artist_credits,
    class_name: :ArtistCredit,
    foreign_key: :artist_credit_type_id
    
  def name
    self.credit_type
  end
end
