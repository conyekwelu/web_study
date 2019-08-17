#
# ============== Redo using a loop and validation==== Searching 101
# num_list = []
# puts "==> Enter the 1st number:"
# num_list << gets.chomp.to_i
# puts "==> Enter the 2nd number:"
# num_list << gets.chomp.to_i
# puts "==> Enter the 3rd number:"
# num_list << gets.chomp.to_i
# puts "==> Enter the 4th number:"
# num_list << gets.chomp.to_i
# puts "==> Enter the 5th number:"
# num_list << gets.chomp.to_i
# puts "==> Enter the last number:"
# last_num = gets.chomp.to_i
#
# if num_list.include?(last_num)
#   puts "The number #{last_num} appears in #{num_list}."
# else
#   puts "The number #{last_num} does not appear in #{p num_list}."
# end
#
# ===============Arithmetic Integer====================Redo with prompt abstracted + integer validation
#
# puts "==> Enter the first number:"
# num1 = gets.chomp.to_i
# puts "==> Enter the second number:"
# num2 = gets.chomp.to_i
#
# puts "==> #{num1} +  #{num2} =  #{num1 + num2}"
# puts "==> #{num1} -  #{num2} =  #{num1 - num2}"
# puts "==> #{num1} *  #{num2} =  #{num1 * num2}"
# puts "==> #{num1} /  #{num2} =  #{num1 / num2}"
# puts "==> #{num1} %  #{num2} =  #{num1 % num2}"
# puts "==> #{num1} ** #{num2} =  #{num1 ** num2}"
#
# ===============Counting the Number of Characters====================
CORE CONCEPT: use backslash to escape characters to print
print "Please write word or multiple words: "
input = gets.chomp

char_count = input.delete(" ").size

puts "There are #{char_count} characters in \"#{input}\"."
puts "#{string} has #{string.count('^ ')} characters"
