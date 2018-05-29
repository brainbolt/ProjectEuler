require 'prime'
require_relative 'problems'

class Problems::Prob3
  def answer
    n = 600851475143
    factors = Prime.prime_division(n)
    factors.map {|f| f[0]}.sort.reverse[0]
  end
end