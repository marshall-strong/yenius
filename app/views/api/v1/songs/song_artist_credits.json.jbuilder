json.albums do
  json.set! @song.album.id do
    json.releaseDate @song.album.release_date
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
  @song.artist_credits.each do |artist_credit|
    json.set! artist_credit.artist.id do
      json.id artist_credit.artist.id
      json.name artist_credit.artist.name
    end
  end
  @song.album.artist_credits.each do |artist_credit|
    json.set! artist_credit.artist.id do
      json.id artist_credit.artist.id
      json.name artist_credit.artist.name
    end
  end
end

json.songs do
  json.set! @song.id do
    json.id @song.id
    json.name @song.name
    json.artistCredits do
      @artist_credit_types.each do |artist_credit_type|
        json.set! artist_credit_type.credit_type do
          json.array! @song.credited_artist_ids_by_artist_credit_type(artist_credit_type.credit_type)
        end
      end
    end
  end
end
