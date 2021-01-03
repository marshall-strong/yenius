json.sampleCreditTypes do
  json.set! @sample_credit_type.id do
    json.id @sample_credit_type.id
    json.credit_type @sample_credit_type.credit_type
    json.description @sample_credit_type.description
  end
end
