# == Schema Information
#
# Table name: artists
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  bio        :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Artist < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  has_many :artist_credits, 
    class_name: :ArtistCredit, 
    foreign_key: :artist_id

  has_many :albums,
    through: :artist_credits,
    source: :creditable,
    source_type: 'Album'
  
  has_many :songs,
    through: :artist_credits,
    source: :creditable,
    source_type: 'Song'
  
  has_many :comments, 
    as: :commentable

  has_one_attached :artist_img

  def artist_credits_by_type(credit_type)
    artist_credit_type = ArtistCreditType.find_by credit_type: credit_type
    credits = self.artist_credits.where(artist_credit_type_id: artist_credit_type.id)
  end

  def credits_on_songs(credit_type)
    artist_credit_type = ArtistCreditType.find_by credit_type: credit_type
    credits = self.artist_credits.where(creditable_type: "Song", artist_credit_type: artist_credit_type.id)
    songs = credits.map { |credit| credit.creditable }
  end

  def credits_on_albums(credit_type)
    artist_credit_type = ArtistCreditType.find_by credit_type: credit_type
    credits = self.artist_credits.where(creditable_type: "Album", artist_credit_type: artist_credit_type.id)
    albums = credits.map { |credit| credit.creditable }
  end


  def banner_img
    if self.albums.length > 0
      self.albums[0].banner_img
    else
      self.artist_credits[0].creditable.album.banner_img
    end
  end

  def description
    store = ""
    if self.name === "Kanye West" || self.name === "Jay-Z"
      return self.bio
    else
      store << "#{self.name} is a musical artist who has collaborated with Kanye West. "
      if self.artist_credits_by_type("FEATURED_ARTIST").length > 0
        song_names = self.credits_on_songs("FEATURED_ARTIST").map { |song| song.name }
        store << "He has been featured on the Kanye West songs #{song_names.join(", ")}. "
      end
      if self.artist_credits_by_type("PRODUCER").length > 0
        song_names = self.credits_on_songs("PRODUCER").map { |song| song.name }
        store << "He has produced the Kanye West songs #{song_names.join(", ")}. "
      end
      return store
    end
  end

end
