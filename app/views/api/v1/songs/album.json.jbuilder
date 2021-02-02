json.albums do
  json.set! @song.album.id do
    json.id @song.album.id
    json.name @song.album.name
    json.urlAlbumCover url_for(@song.album.cover)
    json.releaseDate @song.album.release_date
    json.year @song.album.str_release_year
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

json.artists do
  @song.album.artist_credits.each do |artist_credit|
    json.set! artist_credit.artist.id do
      json.id artist_credit.artist.id
      json.name artist_credit.artist.name
    end
  end
end

json.songs do
  @song.album.songs_on_album.each do |song|
    json.set! song.id do
      json.id song.id
      json.name song.name
      json.albumId song.album_id
      json.trackNumber song.track_number
    end
  end
end
