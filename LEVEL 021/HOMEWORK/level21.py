#num1=int(input('please enter your'))

#if num1 == 12:
    #print("you guessed it")

#else:
   #print("you are wrong")

#for i in range(1, 101):
    #if i % 3 == 0 and i % 5 == 0:
        #print("FizzBuzz")
    #elif i % 3 == 0:
        #print("Fizz")
    #elif i % 5 == 0:
        #print("Buzz")
    #else:
        #print(i)


age = int(input("Please enter your age: "))
experience = int(input("How long have you been driving (in years)?: "))


if age > 0 and experience >= 0:
    if age < 18:
        print("You aren't an adult and you can't drive.")
    elif age >= 18 and experience < 1:
        print("You need at least 1 year of driving experience.")
    elif age >= 18 and experience >= 1:
        print("Congratulations! You are eligible for a driver's license.")
else:
    print("Please enter positive numbers.")