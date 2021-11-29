json.artists do
  @artists.each do |artist|
    json.set! artist.id do
      json.id artist.id
      json.name artist.name
      json.rank artist.rank
      # json.urlHeadshot artist.headshot.attached? ? url_for(artist.headshot) : nil
      json.urlHeadshot artist.headshot
    end
  end
end
