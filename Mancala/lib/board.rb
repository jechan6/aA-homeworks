require "byebug"
class Board
  attr_accessor :cups

  def initialize(name1, name2)
    @name1 = name1
    @name2 = name2
    @cups = Array.new(14)
    place_stones
  end

  def place_stones
    cups.each_index do |idx|
      if idx != 6 || idx != 13
        cups[idx] = [:stone,:stone,:stone,:stone]
      else
        cups[idx] = []
      end
    end
    @cups[6] = []
    @cups[13] = []
    # helper method to #initialize every non-store cup with four stones each
  end

  def valid_move?(start_pos)
    raise "Invalid starting cup" if (start_pos < 0 || start_pos > 13)
    raise "Starting cup is empty" if cups[start_pos].empty?
  end

  def make_move(start_pos, current_player_name)
    stones = @cups[start_pos]
    @cups[start_pos] = []
    idx = start_pos
    while !stones.empty?
      idx += 1
      idx > 13 ? idx = 0 : idx
      if idx == 6
        cups[idx] << stones.shift if current_player_name == @name1
      elsif idx == 13
        cups[idx] << stones.shift if current_player_name == @name2
      else
        cups[idx] << stones.shift
      end
    end
    render
    next_turn(idx)
  end

  def next_turn(ending_cup_idx)

    return :prompt if ending_cup_idx == 6 || ending_cup_idx == 13
    return :switch if @cups[ending_cup_idx].length == 1
    ending_cup_idx

    # helper method to determine whether #make_move returns :switch, :prompt, or ending_cup_idx
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
    @cups[0..6].all? {|el| el.empty?} || @cups[7...13].all? {|el| el.empty?}
  end

  def winner
    p1 = @cups[6].length
    p2 = @cups[13].length
    return :draw if p1 == p2
    p1 > p2 ? @name1 : @name2

  end
end
