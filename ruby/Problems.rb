module Problems
  class Prob1
    def answer
      sum = 0
      (1..999).each do |i|
        if i % 3 == 0 || i % 5 == 0
          sum += i
        end
      end
      sum
    end
  end

  class Prob2
    def answer
      "temp"
    end
  end
end