require 'rails_helper'

RSpec.describe UsersController, type: :controller do
  describe "GET #new" do
    it "renders the new template" do
      get :new, {}
      expect(response).to render_template("new")
    end
  end

  describe "POST #create" do
    context "with invalid params" do
      it "validates the presence of the user's email and password" do
        post :create, params: { user: {email: "test.com"}}
        expect(response).to render_template('new')
        expect(flash[:errors]).to be_present
      end
      it "validates that the password is at least 6 characters long" do
        post :create, params: { user: {email: "test@test.com", password: "123"}}
        expect(response).to render_template('new')
        expect(flash[:errors]).to be_present
      end
    end

    context "with valid params" do
      it "redirects user to bands index on success" do
        post :create, params: { user: {email: "test@test.com", password: "123456"}}
        expect(response).to redirect_to(user_url(User.last))
      end
    end
  end

  describe "GET #show" do
    it "renders the show page " do
      get :show, params: {id: 1}
      expect(response).to render_template("show")
    end
  end
end
