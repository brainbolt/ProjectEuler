require 'require_all'
require_all 'Problems'

def format_answer(answer)
  answer unless answer.is_a?(Numeric)
  answer.to_s.reverse.gsub(/(\d{3})(?=\d)/, '\\1,').reverse
end

problems = Problems.constants
problems.sort.each do |p|
  problem = Object.const_get("#{Problems}::#{p.to_s}").new
  puts "#{p.to_s}: #{format_answer(problem.answer)}"
end
