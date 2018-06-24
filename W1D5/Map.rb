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
    @map.each do |el|
      return el.last if el.first == key
    end
    nil
  end

  def delete(key)
    @map.each do |el|
      return @map.delete(el) if el.first == key
    end
  end

  def show
    @map.each do |el|
      p el
    end
  end

  private
  attr_accessor :map
end
