class TyposController < ApplicationController
  skip_before_filter :verify_authenticity_token

  def create
    puts typo_params.inspect
    @typo = Typo.save_new(params)
  end




  private
  def typo_params
    params.permit(:user_email, :highlighted_text, :complete_text, :comments, :url)
    # params.require(:typo).permit(:user_email, :highlighted_text, :complete_text, :comments, :url)
  end

end
