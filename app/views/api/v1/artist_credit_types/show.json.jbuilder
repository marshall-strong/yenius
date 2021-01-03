json.artistCreditTypes do
  json.set! @artist_credit_type.id do
    json.id @artist_credit_type.id
    json.credit_type @artist_credit_type.credit_type
    json.description @artist_credit_type.description
  end
end
