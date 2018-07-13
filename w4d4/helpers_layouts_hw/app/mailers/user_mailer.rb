class UserMailer < ApplicationMailer
  default from: 'from@example.com'
  def self.welcome_email(user)
    @user = user 
    @url = 'http://gmail.com/login'
    mail(to: user.email, subject: "Welcome to my site!")
  end 
end
