require 'rails_helper'

RSpec.describe User, type: :model do
  subject(:user) do
    FactoryBot.build(:user,
      email: "test@test.com",
      password: "123456")
  end

  describe 'validations' do

    it { should validate_presence_of(:email) }
    it { should validate_presence_of(:password_digest) }
    it { should validate_length_of(:password).is_at_least(6) }
  end

  describe "is_password?" do
    it "checks if password is correct" do
      expect(user.is_password?("123456")).to be true
    end
  end

  describe "reset_session_token" do
    it "resets the session token" do
      session_token = user.session_token
      expect(user.reset_session_token!).to_not eq(session_token)
    end
  end

  describe "find_by_credentials" do
    it "returns user with correct credentials" do
      expect(User.find_by_credentials("test@test.com", "123456")).to eq(user)
    end
  end
end
