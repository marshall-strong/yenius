ActiveAdmin.register ArtistCredit do

  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  permit_params :artist_id, :creditable_type, :creditable_id, :artist_credit_type_id
  #
  # or
  #
  # permit_params do
  #   permitted = [:artist_id, :creditable_type, :creditable_id, :artist_credit_type_id]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end
  
end
