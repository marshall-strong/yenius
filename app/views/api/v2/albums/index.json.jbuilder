json.albums do
  @albums.each do |album|
    json.set! album.id do
      json.id album.id
      json.name album.name
      json.releaseDate album.release_date
      json.subjectImgUrl url_for(album.cover_img)
    end
  end
end
