json.albums do
  @albums.each do |album|
    json.set! album.id do
      json.id album.id
      json.name album.name
      json.releaseDate album.release_date
      json.extract! album, :release_date #necessary?
      json.urlAlbumCover url_for(album.cover)
    end
  end
end
