class TypoMailer < ActionMailer::Base
  default from: "Typo Notifier <typo.spy@gmail.com>"

  def initial_notification(typo)
    @typo = typo
    attachments.inline["spy-icon-64.png"] = File.read(Rails.root + "app/assets/images/spy-icon-64.png")
    mail(:to => typo.domain.email, :subject => "Typo Notification")
  end

end
