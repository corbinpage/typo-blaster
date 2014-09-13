# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :typo do
    status "MyString"
    user_email "MyString"
    highlighted_text "MyText"
    complete_text "MyText"
    comments "MyText"
    url "MyText"
    domain_id nil
    email_date ""
  end
end
