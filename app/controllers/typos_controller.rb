class TyposController < ApplicationController
  skip_before_filter :verify_authenticity_token

  def create
    @typo = Typo.save_new(params)

    if @typo
      render :json => @typo
    else
      puts "Error - Typo not Saved"
      puts "@typo"
      render :json => {status: "Error - Typo not Saved"}
    end
  end




  private
  def typo_params
    params.require(:typo).permit(:user_email, :highlighted_text, :complete_text, :comments, :url, :domain_text)
  end

end
