json.artists do
  @artists.each do |artist|
    json.set! artist.id do
      json.id artist.id
      json.name artist.name
      json.rank artist.top_artist_number
      json.urlHeadshot artist.headshot.attached? ? url_for(artist.headshot) : nil
    end
  end
end
