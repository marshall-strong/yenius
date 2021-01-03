json.albums do
  @albums.each do |album|
    json.set! album.id do
      json.id album.id
      json.title album.name
      json.name album.name #necessary?
      json.releaseDate album.release_date
      json.extract! album, :release_date #necessary?
      json.subjectImgUrl url_for(album.cover_img)
    end
  end
end
