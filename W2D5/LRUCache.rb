class LRUCache
    attr_reader :cache, :size
    def initialize(num)
      @size = num
      @cache = []
    end

    def count
      @cache.length
      # returns number of elements currently in cache
    end

    def add(el)
      if @cache.include?(el)
        @cache.delete(el)
        @cache.push(el)
      else
        @cache.shift if @cache.length == @size
        @cache.push(el)
      end

      # adds element to cache according to LRU principle
    end

    def show
      p @cache
      # shows the items in the cache, with the LRU item first
    end

    private
    # helper methods go here!

  end
