require_relative 'Problems'

class Runner
  def go
    problems = Problems.constants
    problems.sort.each do |p|
      problem = Object.const_get("#{Problems}::#{p.to_s}").new
      puts "#{p.to_s}: #{problem.answer}"
    end
  end
end

Runner.new.go
