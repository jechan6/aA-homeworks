class Map

  def initialize
    @map = Array.new{Array.new}
  end

  def set(key, value)
    (0...@map.length).each do |idx|
      if @map[idx].first == key
        return @map[idx][1] = value
      end
    end
    map << [key, value]
  end

  def get(key)
    (0...@map.length).each do |idx|
      return @map[idx].last if @map[idx].first == key

    end
  end

  def delete(key)
    (0...@map.length).each do |idx|
      return @map.delete_at(idx) if @map[idx].first == key
    end
  end

  def show
    (0...@map.length).each do |idx|
      puts @map[idx]
    end
  end

  private
  attr_accessor :map
end
