json.sampleCredits do
  @sample_credits.each do |credit|
    json.set! credit.id do
      json.id credit.id
      json.parentSongId credit.parent_song_id
      json.childSongId credit.child_song_id
      json.sampleCreditTypeId credit.sample_credit_type_id
    end
  end
end
