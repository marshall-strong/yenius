json.songs do
  @songs.each do |song|
    json.set! song.id do
      json.id song.id
      json.title song.name
      json.name song.name
      json.trackNumber song.track_number
      json.albumId song.album_id
    end
  end
end
