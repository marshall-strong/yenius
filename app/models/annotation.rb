# == Schema Information
#
# Table name: annotations
#
#  id                 :bigint           not null, primary key
#  annotating_user_id :integer          not null
#  annotatable_type   :string           not null
#  annotatable_id     :bigint           not null
#  is_current         :boolean          default("false"), not null
#  body               :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#
class Annotation < ApplicationRecord
    validates :annotating_user_id, presence: true
    validates :annotatable_type, presence: true
    validates :annotatable_id, presence: true
    validates :is_current, presence: true

    belongs_to :annotating_user, 
        class_name: :User, foreign_key: :annotating_user_id
    belongs_to :annotatable, 
        polymorphic: true #Artist, Album, Song, Verse
    has_many :upvotes, 
        as: :upvotable
end
