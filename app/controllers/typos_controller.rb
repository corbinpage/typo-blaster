class TyposController < ApplicationController
  skip_before_filter :verify_authenticity_token

  def create
    puts "After: " + typo_params.inspect
    @typo = Typo.save_new(params)
  end




  private
  def typo_params
    puts "Before: " + params.inspect
    params.require(:typo).permit(:user_email, :highlighted_text, :complete_text, :comments, :url, :domain_text)
    # params.require(:typo).permit(:user_email, :highlighted_text, :complete_text, :comments, :url)
  end

end
