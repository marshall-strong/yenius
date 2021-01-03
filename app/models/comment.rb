# == Schema Information
#
# Table name: comments
#
#  id                 :bigint           not null, primary key
#  commenting_user_id :integer          not null
#  commentable_type   :string           not null
#  commentable_id     :bigint           not null
#  body               :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#
class Comment < ApplicationRecord
  validates :commenting_user_id, presence: true
  validates :commentable_type, presence: true
  validates :commentable_id, presence: true

  belongs_to :author, 
    class_name: :User, 
    foreign_key: :commenting_user_id
  belongs_to :commentable, 
    polymorphic: true #Artist, Album, Song, Verse
  has_many :upvotes, 
    as: :upvotable
end
