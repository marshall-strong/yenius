# == Schema Information
#
# Table name: songs
#
#  id       :bigint       not null, primary key
#  name     :string       not null
#  track_number :integer
#  album_id   :integer      not null
#  created_at   :datetime     not null
#  updated_at   :datetime     not null
#
require 'array_to_list'

class Song < ApplicationRecord
  validates :album_id, presence: true
  validates :name, presence: true

  belongs_to :album, 
    class_name: :Album, 
    foreign_key: :album_id

  has_many :verses, 
    class_name: :Verse, 
    foreign_key: :song_id

  has_many :artist_credits, 
    as: :creditable

  has_many :song_artists, 
    through: :artist_credits,
    source: :credited_artist

  has_many :credits_from_child_song, 
    class_name: :SampleCredit, 
    foreign_key: :parent_song_id

  has_many :child_songs,
    through: :credits_from_child_song,
    source: :child_song

  has_many :credits_to_parent_song, 
    class_name: :SampleCredit, 
    foreign_key: :child_song_id

  has_many :parent_songs, 
    through: :credits_to_parent_song,
    source: :parent_song

  has_many :song_annotations, 
    as: :annotatable

  has_many :comments, 
    as: :commentable

  def credited_artist_ids_by_artist_credit_type(credit_type)
    artist_credit_type = ArtistCreditType.find_by credit_type: credit_type
    credits = self.artist_credits.where(artist_credit_type_id: artist_credit_type.id)
    return nil if credits.length === 0
    artistIds = credits.map { |credit| credit.credited_artist.id }
    return artistIds
  end

  def sampled_song_ids_by_sample_credit_type_and_relation(credit_type, parents_or_children)
    sample_credit_type = SampleCreditType.find_by credit_type: credit_type
    if parents_or_children === "parents" then
      credits = self.credits_to_parent_song.where(sample_credit_type_id: sample_credit_type.id)
      return nil if credits.length === 0
      songIds = credits.map { |credit| credit.parent_song_id }
      return songIds
    elsif parents_or_children === "children" then
      credits = self.credits_from_child_song.where(sample_credit_type_id: sample_credit_type.id)
      return nil if credits.length === 0
      songIds = credits.map { |credit| credit.child_song_id }
      return songIds
    else
      return ["error"]
    end
  end
  
  # all artists who have a credit on the song
  def artists
    @artists = (self.song_artists + self.album.artists).uniq
  end

  def featured_artists
    credit_type = ArtistCreditType.find_by credit_type: "FEATURED_ARTIST"
    credits = self.artist_credits.where(artist_credit_type_id: credit_type.id)
    artists = credits.map { |credit| credit.credited_artist }
  end

  def producers
    credit_type = ArtistCreditType.find_by credit_type: "PRODUCER"
    credits = self.artist_credits.where(artist_credit_type_id: credit_type.id)
    artists = credits.map { |credit| credit.credited_artist }
  end

  def artistsPrimary
    credit_type = ArtistCreditType.find_by credit_type: "PRIMARY_ARTIST"
    credits = self.artist_credits.where(artist_credit_type_id: credit_type.id)
    song_artists = credits.map { |credit| credit.credited_artist }
    album_credits = self.album.artist_credits.where(artist_credit_type_id: credit_type.id)
    album_artists = album_credits.map { |credit| credit.credited_artist }
    @artistsPrimary = (song_artists + album_artists).uniq
  end

  # flags
  def sni?
    self.album.name === "Samples & Interpolations"
  end
  def samples?
    self.samples.length > 0
  end
  def interpolates?
    self.interpolates.length > 0
  end
  def sampled_in?
    self.sampled_in.length > 0
  end
  def interpolated_by?
    self.interpolated_by.length > 0
  end

  # This is a placeholder...
  def description
    store = ""
    if self.sni?
      # description for SnI songs
      store << "'#{self.name}' is a song by artist #{self.list_artistsPrimary}. "
      if self.samples?
        store << "It directly samples parts of the Kanye West song '#{self.samples[0].name}.' "
      end
      if self.interpolates?
        store << "It re-records (or 'interpolates') parts of the Kanye West song '#{self.interpolates[0].name}.' "
      end
      if self.sampled_in?
        store << "The Kanye West song '#{self.sampled_in[0].name}' directly samples parts of it. "
      end
      if self.interpolated_by?
        store << "The Kanye West song '#{self.interpolated_by[0].name}' re-records (or 'interpolates') parts of it. "
      end
    else
      # description for Kanye songs
      store << "'#{self.name}' is the #{self.track_number.ordinalize} song on #{self.list_artistsPrimary}'s #{self.album.release_date.strftime("%Y")} album '#{self.album.name}'. "

      if self.samples? && self.sampled_in?
        store << "It directly samples parts of #{self.samples.length} existing #{self.samples.length > 1 ? "songs" : "song"} by other artists, and is in turn sampled by #{self.sampled_in.length} other #{self.sampled_in.length > 1 ? "songs" : "song"}. "
      else
        if self.samples?
          store << "It directly samples parts of #{self.samples.length} existing #{self.samples.length > 1 ? "songs" : "song"} by other artists. "
        end
        if self.sampled_in?
          store << "It is directly sampled in parts of #{self.sampled_in.length} #{self.sampled_in.length > 1 ? "songs" : "song"} by other artists. "
        end
      end

      if self.interpolates? && self.interpolated_by?
        store << "It re-records (or 'interpolates') parts of #{self.interpolates.length} existing #{self.interpolates.length > 1 ? "songs" : "song"} by other artists, and is in turn interpolated by #{self.interpolated_by.length} other #{self.interpolated_by.length > 1 ? "songs" : "song"}. "
      else
        if self.interpolates?
          store << "It re-records (or 'interpolates') parts of #{self.interpolates.length} existing #{self.interpolates.length > 1 ? "songs" : "song"} by other artists. "
        end
        if self.interpolated_by?
          store << "Parts of it are re-recorded (or 'interpolated') by #{self.interpolated_by.length} #{self.interpolated_by.length > 1 ? "songs" : "song"} by other artists. "
        end
      end
    end

    return store    
  end

  
  # string functions
  def list_artistsPrimary
    arr = self.artistsPrimary
    prc = Proc.new { |artist| artist.name }
    empty = "ERROR: no primary artists"
    array_to_list(arr, prc, empty)
  end
  
  def list_featured_artists
    arr = self.featured_artists
    prc = Proc.new { |artist| artist.name }
    empty = "ERROR: no featured_artists"
    array_to_list(arr, prc, empty)
  end
  
  def list_producers
    arr = self.producers
    prc = Proc.new { |artist| artist.name }
    empty = "ERROR: no producers"
    array_to_list(arr, prc, empty)
  end
  
  def name_by_list_artistsPrimary
    self.name + " by " + self.list_artistsPrimary
  end
  
  def name_ft_list_featured_artists
    if self.featured_artists === []
      self.name
    else
      self.name + " (Ft. " + self.list_featured_artists + ")"
    end
  end

  def name_ft_by
    self.name_ft_list_featured_artists + " by " + self.list_artistsPrimary
  end
  
  
  # Samples and Interpolations
  def parent_and_child_samples
    (self.samples + self.sampled_in).uniq
  end
  def parent_and_child_interpolations
    (self.interpolates + self.interpolated_by).uniq
  end
  def parent_and_child_songs
    (self.parent_and_child_samples + self.parent_and_child_interpolations).uniq
  end

  # used in the description
  def samples
    credit_type = SampleCreditType.find_by credit_type: "SAMPLE"
    credits = self.credits_to_parent_song.where(sample_credit_type_id: credit_type.id)
    songs = credits.map { |credit| credit.parent_song }
  end
  def sampled_in
    credit_type = SampleCreditType.find_by credit_type: "SAMPLE"
    credits = self.credits_from_child_song.where(sample_credit_type_id: credit_type.id)
    songs = credits.map { |credit| credit.child_song }
  end
  def interpolates
    credit_type = SampleCreditType.find_by credit_type: "INTERPOLATION"
    credits = self.credits_to_parent_song.where(sample_credit_type_id: credit_type.id)
    songs = credits.map { |credit| credit.parent_song }
  end
  def interpolated_by
    credit_type = SampleCreditType.find_by credit_type: "INTERPOLATION"
    credits = self.credits_from_child_song.where(sample_credit_type_id: credit_type.id)
    songs = credits.map { |credit| credit.child_song }
  end
end
