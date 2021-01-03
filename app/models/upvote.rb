# == Schema Information
#
# Table name: upvotes
#
#  id               :bigint           not null, primary key
#  upvoting_user_id :integer          not null
#  upvotable_type   :string           not null
#  upvotable_id     :bigint           not null
#  is_downvote      :boolean          default("false"), not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#
class Upvote < ApplicationRecord
    validates :upvoting_user_id, presence: true
    validates :upvotable_type, presence: true
    validates :upvotable_id, presence: true
    validates :is_downvote, presence: true

    belongs_to :upvoting_user, 
        class_name: :User, foreign_key: :upvoting_user_id
    belongs_to :upvotable, 
        polymorphic: true #Annotation, Comment
end
