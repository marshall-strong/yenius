json.artists do
  @artists.each do |artist|
    json.set! artist.id do
      json.id artist.id
      json.name artist.name
      json.imgUrl url_for(artist.artist_img)
    end
  end
end
