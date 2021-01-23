json.songs do
  @songs.each do |song|
    json.set! song.id do
      json.id song.id
      json.name song.name
      json.trackNumber song.track_number
      json.albumId song.album_id
      json.artist song.list_artistsPrimary
      json.topSongNumber song.top_song_number
    end
  end
end
