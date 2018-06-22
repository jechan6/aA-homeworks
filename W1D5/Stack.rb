class Stack
   def initialize
     # create ivar to store stack here!
     @stack = []
   end

   def push(el)
     @stack << el
     # adds an element to the stack
   end

   def pop
     # removes one element from the stack
     @stack.pop
   end

   def peek
     @stack.last
     # returns, but doesn't remove, the top element in the stack
   end
 end
