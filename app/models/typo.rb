class Typo < ActiveRecord::Base
  belongs_to :domain

  attr_accessor :status, :email_date

  STATUS_TYPO_SUBMISSION = "TYPO_SUBMISSION"
  STATUS_READY_FOR_EMAIL = "READY_FOR_EMAIL"
  STATUS_EMAIL_SENT = "EMAIL_SENT"

  def self.save_new(typo_params)
    domain_text = typo_params.delete("domain_text")
    new_typo = Typo.new(typo_params)
    new_typo[:status] = STATUS_TYPO_SUBMISSION
    new_typo[:domain_id] = Domain.find_or_create_by(url: domain_text).id

    new_typo.save
    new_typo
  end

  def self.send_automated_notifications
    Typo.where(status: STATUS_READY_FOR_EMAIL).each do |t|
      t.send_initial_notification
    end
  end

  def send_initial_notification
    TypoMailer.initial_notification(self).deliver

    self.status = STATUS_EMAIL_SENT
    self.email_date = Time.now
    self.save
  end

end
