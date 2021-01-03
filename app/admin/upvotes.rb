ActiveAdmin.register Upvote do

  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  permit_params :upvoting_user_id, :upvotable_type, :upvotable_id, :is_downvote
  #
  # or
  #
  # permit_params do
  #   permitted = [:upvoting_user_id, :upvotable_type, :upvotable_id, :is_downvote]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end
  
end
