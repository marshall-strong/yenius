# == Schema Information
#
# Table name: sample_credits
#
#  id         :bigint       not null, primary key
#  parent_song_id :integer
#  child_song_id  :integer
#  sample_credit_type_id   :integer
#  created_at     :datetime     not null
#  updated_at     :datetime     not null
#
class SampleCredit < ApplicationRecord
  validates :parent_song_id, presence: true
  validates :child_song_id, presence: true
  validates :sample_credit_type_id, presence: true

  belongs_to :parent_song, 
    class_name: :Song, 
    foreign_key: :parent_song_id
  belongs_to :child_song, 
    class_name: :Song, 
    foreign_key: :child_song_id
  belongs_to :sample_credit_type,
    class_name: :SampleCreditType,
    foreign_key: :sample_credit_type_id
end
