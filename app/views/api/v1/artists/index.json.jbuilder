json.artists do
  @artists.each do |artist|
    json.set! artist.id do
      json.id artist.id
      json.title artist.name
      json.name artist.name
    end
  end
end
