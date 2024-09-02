# 1
def sum(x, y):
    print(x + y)
    print(x - y)
    print(x * y)
    print(x / y)
sum(10, 5)

# 2 
def info(name):
    print('Welcome' ' ' +  name + ' ' 'i wish all the best')
info('luka')

# 3
def info(name):
    print("i love you so much, i cant live without you, will u be my girlfriend? from" " " + name) #cringe
info('luka')

# 4
def info(name, surname, age, country, city, hobby):
    print('I am ' + name + ', my surname is ' + surname + '. I am ' + age + ' years old. I am from ' + country + ', and I live in ' + city + '. My hobby is ' + hobby + '.')
info('Luka', 'Chachiashvili', '14', 'Georgia', 'Tbilisi', 'Karate')

# 5 
def calculate_area(width, length):
    area = width * length
    print('Area:', area)
calculate_area(20, 10)

# 6
def find_max(num1, num2):
    if num1 > num2:
        return num1
    else:
        return num2
print(find_max(10, 20))

# 7
def even_or_odd(number):
    if number % 2 == 0:
        return "Even"
    else:
        return "Odd"