def sluggish_octopus(fishes)
  
  max = ""
  fishes.each_index do |idx|
    (idx + 1 ... fishes.length).each do |i|
      if fishes[i].length > fishes[idx].length
        max =fishes[i]
      end 
    end 
  
  end 
  max
end 

def sort_octopuses(arr)
  return arr if arr.length <= 1
  mid = arr.length/2
  left = sort_octopuses(arr.take(mid))
  right = sort_octopuses(arr.drop(mid))
  result = merge_octopuses(left,right)
  
end 

def merge_octopuses(left,right)
  result = []
  until left.empty? || right.empty?
    if left.first.length < right.first.length
      result << left.shift
    else 
      result << right.shift
    end 
  end 
  result + left + right
end 

def dominant_octopus(arr)
  sort_octopuses(arr)[-1]
end 

def clever_octopus(arr)
  max = ""
  arr.each do |el|
    if el.length > max.length 
      max = el 
    end 
  end 
  max
end 

def slow_dance(dir, arr)
  arr.each_index do |idx|
    if arr[idx] == dir 
      return idx 
    end 
  end 
end 

def fast_dance(dir, hash_tiles)
  return hash_tiles[dir]
end 
