json.songs do
  @songs.each do |song|
    json.set! song.id do
      json.id song.id
      json.name song.name
      json.artist song.list_artistsPrimary
      json.rank song.rank
      json.urlAlbumCover url_for(song.album.cover)
    end
  end
end
