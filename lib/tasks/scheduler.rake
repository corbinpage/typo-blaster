


desc "This task is called by the Heroku scheduler add-on to send daily email messages"
task :send_messages => :environment do
  puts "Sending Emails Messages..."
  Typo.send_automated_notifications
  puts "Sending Emails Completed."
end