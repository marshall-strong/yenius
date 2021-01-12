json.artists do
  @song.parent_songs.each do |parent_song|
    parent_song.artist_credits.each do |artist_credit|
      json.set! artist_credit.artist.id do
        json.id artist_credit.artist.id
        json.name artist_credit.artist.name
      end
    end
  end
  @song.child_songs.each do |child_song|
    child_song.artist_credits.each do |artist_credit|
      json.set! artist_credit.artist.id do
        json.id artist_credit.artist.id
        json.name artist_credit.artist.name
      end
    end
  end
end

json.songs do
  json.set! @song.id do
    json.id @song.id
    json.name @song.name
    json.set! 'sampleCredits' do
      @sample_credit_types.each do |sample_credit_type|
        json.set! sample_credit_type.credit_type do
          json.set! 'parentSongIds' do
            json.array! @song.sampled_song_ids_by_sample_credit_type_and_relation(sample_credit_type.credit_type, "parents")
          end
          json.set! 'childSongIds' do
            json.array! @song.sampled_song_ids_by_sample_credit_type_and_relation(sample_credit_type.credit_type, "children")
          end
        end
      end
    end
  end
  @song.parent_and_child_songs.each do |song|
    json.set! song.id do
      json.id song.id
      json.name song.name
      json.displayName song.name_by_list_artistsPrimary
      json.albumId song.album_id
      json.set! 'artistCredits' do
        @artist_credit_types.each do |artist_credit_type|
          json.set! artist_credit_type.credit_type do
            json.array! song.credited_artist_ids_by_artist_credit_type(artist_credit_type.credit_type)
          end
        end
      end
    end
  end
end
