class Typo < ActiveRecord::Base
  belongs_to :domain

  STATUS_READY_FOR_EMAIL = "READY_FOR_EMAIL"
  STATUS_EMAIL_SENT = "EMAIL_SENT"

  def self.save_new(params)
    new_typo = Typo.new

    puts "Params: " + params.inspect

    new_typo[:user_email] = params[:user_email]
    new_typo[:highlighted_text] = params[:highlighted_text]
    new_typo[:complete_text] = params[:complete_text]
    new_typo[:comments] = params[:comments]
    new_typo[:url] = params[:url]
    new_typo[:status] = STATUS_READY_FOR_EMAIL
    new_typo[:domain_id] = Domain.find_or_create_by(url: params[:domain_text]).id

    puts "New Typo: " + new_typo.inspect

    new_typo.save
    new_typo
  end

end
