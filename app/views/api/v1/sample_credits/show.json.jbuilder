json.artistCredits do
    json.set! @sample_credit.id do
      json.id @sample_credit.id
      json.parentSongId @sample_credit.parent_song_id
      json.childSongId @sample_credit.child_song_id
      json.sampleCreditTypeId @sample_credit.sample_credit_type_id
    end
end
