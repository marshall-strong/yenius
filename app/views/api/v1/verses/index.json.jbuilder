json.verses do
  @verses.each do |verse|
    json.set! verse.id do
      json.id verse.id
      json.songId verse.song_id
      json.verseNumber verse.verse_number
      json.body verse.body
    end
  end
end
