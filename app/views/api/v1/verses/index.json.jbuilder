json.verses do
  @verses.each do |verse|
    json.set! verse.id do
      json.id verse.id
      json.songId verse.song_id
      json.body verse.body
    end
  end
end
