



def add
  print "Enter a number: "
  firstNum = gets.to_i
  print "Enter another number: "
  secondNum = gets.to_i
  puts firstNum.to_s + "+" + secondNum.to_s + "=" + (firstNum + secondNum).to_s
end

add

puts "hello world"

fruits = ["bananas", "oranges", "apples", "strawberries"]

def gertrude(array)
  array.each do |item|
    puts "item #"  + "#{item}"
  end
end

gertrude(fruits)
