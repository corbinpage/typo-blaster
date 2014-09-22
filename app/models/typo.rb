class Typo < ActiveRecord::Base
  belongs_to :domain

  STATUS_READY_FOR_EMAIL = "READY_FOR_EMAIL"
  STATUS_EMAIL_SENT = "EMAIL_SENT"

  def self.save_new(typo_params)
    domain_text = typo_params.delete("domain_text")
    new_typo = Typo.new(typo_params)
    new_typo[:status] = STATUS_READY_FOR_EMAIL
    new_typo[:domain_id] = Domain.find_or_create_by(url: domain_text).id

    new_typo.save
    new_typo
  end

end
