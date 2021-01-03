json.artistCredits do
  @artist_credits.each do |credit|
    json.set! credit.id do
      json.id credit.id
      json.artistId credit.artist_id
      json.creditableType credit.creditable_type
      json.creditableId credit.creditable_id
      json.artistCreditTypeId credit.artist_credit_type_id
    end
  end
end
