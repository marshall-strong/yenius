json.artists do
  @artists.each do |artist|
    json.set! artist.id do
      json.id artist.id
      json.name artist.name
      json.topArtistNumber artist.top_artist_number
    end
  end
end
