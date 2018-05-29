require_relative 'problems'

class Problems::Prob2
  def answer
    prev = 0
    current = 1
    sum = 0
    while current + prev < 4_000_000
      temp = current
      current += prev
      prev = temp
      sum += current if current % 2 == 0
    end
    sum
  end

end