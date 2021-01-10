json.albums do
  # album info for @song.album
  json.set! @song.album.id do
    json.id @song.album.id
    json.name @song.album.name
    json.urlAlbumCover url_for(@song.album.cover_img)
    json.urlAlbumCover64px url_for(@song.album.cover_img.variant(resize_to_fit: [64, 64], quality: 80))
    json.releaseDate @song.album.release_date
    json.year @song.album.str_release_year
    json.artistsPrimary do
      json.array! @song.album.artistsPrimary.map { |artist| artist.id }
    end
    json.songs do
      json.array! @song.album.songs_on_album.ids
    end
    json.set! 'artistCredits' do
      @artist_credit_types.each do |artist_credit_type|
        json.set! artist_credit_type.credit_type do
          json.array! @song.album.credited_artist_ids_by_artist_credit_type(artist_credit_type.credit_type)
        end
      end
    end
  end
end

# get artist.id and artist.name for...
json.artists do
  # all artists credited on @song
  @song.artist_credits.each do |artist_credit|
    json.set! artist_credit.artist.id do
      json.id artist_credit.artist.id
      json.name artist_credit.artist.name
    end
  end
  # all artists credited on @song.album
  @song.album.artist_credits.each do |artist_credit|
    json.set! artist_credit.artist.id do
      json.id artist_credit.artist.id
      json.name artist_credit.artist.name
    end
  end
  # all artists of @song parent songs
  @song.parent_songs.each do |parent_song|
    parent_song.artist_credits.each do |artist_credit|
      json.set! artist_credit.artist.id do
        json.id artist_credit.artist.id
        json.name artist_credit.artist.name
      end
    end
  end
  # all artists of @song child songs
  @song.child_songs.each do |child_song|
    child_song.artist_credits.each do |artist_credit|
      json.set! artist_credit.artist.id do
        json.id artist_credit.artist.id
        json.name artist_credit.artist.name
      end
    end
  end
end


json.songs do
  # basic metadata for the other songs on the album
  @song.album.songs_on_album.each do |song|
    json.set! song.id do
      json.id song.id
      json.name song.name
      json.albumId song.album_id
      json.trackNumber song.track_number
    end
  end
  # basic metadata for parent and child songs that sample or interpolate
  @song.parent_and_child_songs.each do |song|
    json.set! song.id do
      json.id song.id
      json.name song.name
      json.displayName song.name_by_list_artistsPrimary
      json.albumId song.album_id
      json.set! 'artistCredits' do
        @artist_credit_types.each do |artist_credit_type|
          json.set! artist_credit_type.credit_type do
            json.array! song.credited_artist_ids_by_artist_credit_type(artist_credit_type.credit_type)
          end
        end
      end
    end
  end
  # detailed metadata for @song (in addition to basic metadata)
  json.set! @song.id do
    # description
    json.description @song.description
    # sampleCredits
    json.set! 'sampleCredits' do
      @sample_credit_types.each do |sample_credit_type|
        json.set! sample_credit_type.credit_type do
          json.set! 'parentSongIds' do
            json.array! @song.sampled_song_ids_by_sample_credit_type_and_relation(sample_credit_type.credit_type, "parents")
          end
          json.set! 'childSongIds' do
            json.array! @song.sampled_song_ids_by_sample_credit_type_and_relation(sample_credit_type.credit_type, "children")
          end
        end
      end
    end
    # artistCredits
    json.artistCredits do
      @artist_credit_types.each do |artist_credit_type|
        json.set! artist_credit_type.credit_type do
          json.array! @song.credited_artist_ids_by_artist_credit_type(artist_credit_type.credit_type)
        end
      end
    end
    # song images
    json.urlAlbumCover url_for(@song.album.cover_img)
    json.urlAlbumBanner url_for(@song.album.banner_img)
    # legacy artistCredit methods
    # json.artistsPrimary do
    #   json.array! @song.artistsPrimary.map { |artist| artist.id }
    # end
    # json.artistsFeatured do
    #   json.array! @song.featured_artists.map { |artist| artist.id }
    # end
    # json.artistsProducers do
    #   json.array! @song.producers.map { |artist| artist.id }
    # end
    # verses
    json.verses do
      json.array! @song.verses.ids
    end
    # comments
    json.comments do
      json.array! @song.comments.ids
    end
  end

end

json.verses do
  @song.verses.each do |verse|
    json.set! verse.id do
      json.extract! verse, :id
      json.extract! verse, :song_id
      json.songId verse.song_id
      json.extract! verse, :verse_number
      json.extract! verse, :body
    end
  end
end

json.comments do
  @song.comments.each do |comment|
    json.set! comment.id do
      json.id comment.id
      json.authorId comment.commenting_user_id
      json.commentableType comment.commentable_type
      json.commentableId comment.commentable_id
      json.body comment.body
      json.createdAt comment.created_at
      json.updatedAt comment.updated_at
    end
  end
end

json.users do
  @song.comments.each do |comment|
    json.set! comment.author.id do
      json.id comment.author.id
      json.username comment.author.username
      json.email comment.author.email
    end
  end
end
