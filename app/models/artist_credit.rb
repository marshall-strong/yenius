# == Schema Information
#
# Table name: artist_credits
#
#  id        :bigint       not null, primary key
#  artist_id     :integer
#  creditable_type :string
#  creditable_id   :bigint
#  artist_credit_type_id  :integer
#  created_at    :datetime     not null
#  updated_at    :datetime     not null
#
class ArtistCredit < ApplicationRecord
  validates :artist_id, presence: true
  validates :creditable_type, presence: true
  validates :creditable_id, presence: true
  validates :artist_credit_type_id, presence: true

  belongs_to :credited_artist,
    class_name: :Artist,
    foreign_key: :artist_id

  belongs_to :creditable, 
    polymorphic: true #Album, Song
    
  # belongs_to :song, -> { where(artist_credits: {creditable_type: 'Song'}) },
  #   class_name: :Song,
  #   foreign_key: :creditable_id,
  #   optional: true


  # belongs_to :album, -> { where(artist_credits: {creditable_type: 'Album'}) },
  #   class_name: :Album,
  #   foreign_key: :creditable_id,
  #   optional: true
    

  belongs_to :artist_credit_type,
    class_name: :ArtistCreditType,
    foreign_key: :artist_credit_type_id
    # PRIMARY_ARTIST
    # FEATURED_ARTIST
    # PRODUCER

  def artist
    self.credited_artist
  end
end



