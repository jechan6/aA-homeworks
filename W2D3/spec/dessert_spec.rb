require 'rspec'
require 'dessert'

=begin
Instructions: implement all of the pending specs (the `it` statements without blocks)! Be sure to look over the solutions when you're done.
=end

describe Dessert do
  let(:chef) { double("chef", name: "jeff") }
  let(:cake) { Dessert.new("cake", 50, chef) }

  describe "#initialize" do

    it "sets a type" do
      expect(cake.type).to eq("cake")
    end

    it "sets a quantity" do
      expect(cake.quantity).to eq(50)
    end

    it "starts ingredients as an empty array" do
      expect(cake.ingredients).to be_empty
    end

    it "raises an argument error when given a non-integer quantity" do
      expect { Dessert.new("cake", "100", chef)}.to raise_error(ArgumentError)
    end

  end

  describe "#add_ingredient" do
    ingredients = ["sugar", "milk", "cream"]
    it "adds an ingredient to the ingredients array" do

      ingredients.each {|el| cake.add_ingredient(el)}
      expect(cake.ingredients).to eq(ingredients)
    end

  end

  describe "#mix!" do
    ingredients = ["sugar", "milk", "cream"]
    it "shuffles the ingredient array" do
      cake.mix!
      expect(cake.ingredients).not_to eq(ingredients)

    end
  end

  describe "#eat" do
    it "subtracts an amount from the quantity" do
      amount = cake.quantity
      cake.eat(1)
      expect(cake.quantity).to eq(amount-1)
    end

    it "raises an error if the amount is greater than the quantity" do
      expect{cake.eat(200)}.to raise_error("not enough left!")
    end

  end

  describe "#serve" do
    it "contains the titleized version of the chef's name" do
      expect(chef).to receive(:titleize).and_return("Jeff")
      expect(cake.serve).to eq("Jeff has made 50 cakes!")
    end
  end

  describe "#make_more" do
    it "calls bake on the dessert's chef with the dessert passed in" do
      expect(chef).to receive(:bake)
      cake.make_more

    end
  end
end
