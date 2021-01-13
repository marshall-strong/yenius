json.songs do
  json.set! @song.id do
    json.id @song.id
    json.name @song.name
    json.albumId @song.album_id
    json.trackNumber @song.track_number
  end
end
