# == Schema Information
#
# Table name: verses
#
#  id       :bigint       not null, primary key
#  song_id    :integer      not null
#  verse_number :integer      not null
#  body     :string
#  created_at   :datetime     not null
#  updated_at   :datetime     not null
#
class Verse < ApplicationRecord
  validates :song_id, presence: true
  validates :verse_number, presence: true

  belongs_to :song, 
    class_name: :Song, foreign_key: :song_id
  has_many :verse_annotations, 
    as: :annotatable
  has_many :comments,
    as: :commentable
end
