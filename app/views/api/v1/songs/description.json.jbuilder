json.songs do
  json.set! @song.id do
    json.id @song.id
    json.name @song.name
    json.description @song.description
  end
end
