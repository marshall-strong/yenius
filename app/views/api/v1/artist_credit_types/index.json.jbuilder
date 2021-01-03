json.artistCreditTypes do
  @artist_credit_types.each do |credit_type|
    json.set! credit_type.id do
      json.id credit_type.id
      json.credit_type credit_type.credit_type
      json.description credit_type.description
    end
  end
end
