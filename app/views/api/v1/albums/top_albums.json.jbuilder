json.albums do
  @albums.each do |album|
    json.set! album.id do
      json.id album.id
      json.name album.name
      json.artist album.artists_string
      json.releaseDate album.release_date
      json.urlAlbumCover album.cover.attached? ? url_for(album.cover) : nil
      json.rank album.rank
    end
  end
end
