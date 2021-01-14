# == Schema Information
#
# Table name: albums
#
#  id           :bigint     not null, primary key
#  name         :string     not null
#  release_date :date
#  bio          :string
#  created_at   :datetime   not null
#  updated_at   :datetime   not null
#
class Album < ApplicationRecord
  validates :name, presence: true

  has_many :artist_credits,
    as: :creditable
    #class_name: :ArtistCredit

  has_many :artists,
    through: :artist_credits,
    source: :credited_artist

  has_many :songs_on_album,
    class_name: :Song,
    foreign_key: :album_id

  has_many :comments,
    as: :commentable

  has_many :album_annotations,
    as: :annotatable

  has_one_attached :cover
  has_one_attached :banner

  def credited_artist_ids_by_artist_credit_type(credit_type)
    artist_credit_type = ArtistCreditType.find_by credit_type: credit_type
    credits = self.artist_credits.where(artist_credit_type_id: artist_credit_type.id)
    return nil if credits.length === 0
    artistIds = credits.map { |credit| credit.credited_artist.id }
    return artistIds
  end

  def artists_string
    artists = self.artists.map { |artist| artist.name }
    string = ""

    if artists.length == 0
      string << "Various Artists"
    elsif artists.length == 1
      string << artists.first
    elsif artists.length == 2
      string << artists.first << " & " << artists.last
    elsif artists.length >=3
      string << artists.first
      i = 1
      while i < artists.length - 1
        string << ", " << artists[i]
        i += 1
      end
      string << " & " << artists.last
    end

    return string
  end

  def artistsPrimary
    credit_type = ArtistCreditType.find_by credit_type: "PRIMARY_ARTIST"
    credits = self.artist_credits.where(artist_credit_type_id: credit_type.id)
    artists = credits.map { |credit| credit.credited_artist }
  end

  def song_artists
    songs = self.songs_on_album
    artists = []
    songs.each { |song| artists += song.artists }
    artists.uniq
  end


  def description
    @description = self.bio
  end

  def str_release_year
    self.release_date.strftime("%Y")
  end

end
