json.artistCredits do
    json.set! @artist_credit.id do
      json.id @artist_credit.id
      json.artistId @artist_credit.artist_id
      json.creditableType @artist_credit.creditable_type
      json.creditableId @artist_credit.creditable_id
      json.artistCreditTypeId @artist_credit.artist_credit_type_id
    end
end
