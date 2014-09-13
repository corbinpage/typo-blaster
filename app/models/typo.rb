class Typo < ActiveRecord::Base
  belongs_to :domain

  READY_FOR_EMAIL = "READY_FOR_EMAIL"
  EMAIL_SENT = "EMAIL_SENT"

  def self.save_new(params)
    new_typo = Typo.new

    puts "|||" + params.inspect

    new_typo[:user_email] = params[:user_email]
    new_typo[:highlighted_text] = params[:highlighted_text]
    new_typo[:complete_text] = params[:complete_text]
    new_typo[:comments] = params[:comments]
    new_typo[:url] = params[:url]
    new_typo[:status] = READY_FOR_EMAIL
    new_typo[:domain_id] = Domain.find_or_create_by(url: params[:domain]).id
    # new_typo[:email_date]

    new_typo.save
    new_typo
  end

end
