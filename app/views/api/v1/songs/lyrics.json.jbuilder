json.songs do
  json.set! @song.id do
    json.id @song.id
    json.name @song.name
    json.verses do
      json.array! @song.verses.ids
    end
  end
end

json.verses do
  @song.verses.each do |verse|
    json.set! verse.id do
      json.id verse.id
      json.body verse.body
      json.songId verse.song_id
    end
  end
end
