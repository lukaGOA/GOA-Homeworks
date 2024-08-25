# Module 1

# 1
# Simple Operations

#hours = 24
#minutes = 60
#seconds = 60

#print(hours * minutes * seconds)

# 2 
# Price Program

#item_price = int(input('Enter item price: '))

#finally_item_price = "Price: " + str(item_price) + '$'

#print(finally_item_price)

# 3
# Outputting a Score

#nickname = input('enter your nickname')
#score = int(input('enter your score'))

#nickname_res = 'Nickanme: ' + nickname
#score_res = 'Score: ' + str(score)

#print(nickname_res)
#print(score_res)

# 4 
# Drawing a Snowflake

#p1 = '      *'
#p2 = '     ***'
#p3 = '    *****'
#p4 = '     ***'
#p5 = '      *'

#print(p1)
#print(p2)
#print(p3)
#print(p4)
#print(p5)

# Module 2

# 1
# Country Cards

#country = input('enter country')
#capital = input('enter capital')


#print("Country:" + country)
#print("Capital:" + capital)

# 2
# Chess Tournament

#win = int(input('enter win count: '))
#tie = int(input('enter tie count: '))

#player_1 = win * 1 and tie * 0.5
#player_2 = win * 1 and tie * 0.5

#print(player_1)
#print(player_2)

# 3
# Bank Account Balance

#balance = int(input('Enter balance: '))
#withdraw = int(input('Enter withdraw amount: '))

#new_balance = balance - withdraw

#print('Your current balance is', balance, 'and after the withdrawal, your balance will be', new_balance)

# Module 3
# 1
# Take Your Kindle

#age = int(input('enter your age'))

#if age <= 19:
     #print('take your kindle')
#else:
     #print('you cannot take your kindler')

# 2
# Organized Robot

#robot_color = input('enter robot color ')

#if robot_color == 'red':
      #print('go to box 1')
#elif robot_color == 'green':
      #print('go to box 2')
#elif robot_color == 'black':
      #print('go to box 3')
#else: 
      #print('unknown')

# 3
# Open or Closed

#day = int(input('enter day of a week: '))
#hour = int(input('enter hour: '))

#if day in range(0, 5) and hour >= 10 and hour <= 21:
    #print('Open')
#else:
    #print('Closed')

# Module 4
# 1
# A Word Game

#index_1 = int(input('enter your index'))
#index_2 = int(input('enter your index'))
#index_3 = int(input('enter your index'))


#alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

#print(alpha[index_1]) == 6
#print(alpha[index_2]) == 14
#print(alpha[index_3]) == 0

# 2
# Smart Home

#command = input('enter your command: ')

#supported = ['lights out', 'lock the door', 'opem the door', 'shut down', 'make coffe', ]

#if command in supported:
     #print('ok')
#else: 
     #print('unknown')

# 3
#  Nearest Resturant

floor_num = int(input('enter the total amount of floor:'))
for floor in range(5, floor_num + 1, 5):
    print(floor)
