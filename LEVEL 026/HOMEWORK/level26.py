#1
height = input('please enter your height')
weight = input('please enter your weight')
      
underweight = 'less than 18.5'
normal = 'more or equal to 18.5 and less than 25'
overweight = 'more or equal to 25 and less than 30'
obesity = '30 or more'

bmi = float(weight) / (float(height) ** 2)
if   bmi < 18.5:
    print(underweight)
elif 18.5 <= bmi < 24.9:
      print(normal)
elif 25 <= bmi < 29.9:
     print(overweight)
else:
     print(obesity)




#2

#3
#number = 5
#for i in range(number, -1, -1):
    #print(i)