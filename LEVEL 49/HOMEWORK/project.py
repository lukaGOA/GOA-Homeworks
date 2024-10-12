"""
პრობლემა: დაწერეთ პროგრამა, რომელიც ითვლის სტუდენტების ნიშნებს
და განსაზღვრავს საუკეთესო სტუდენტს. მომხმარებელი შეიყვანს სტუდენტების 
სახელებსა და მათ ნიშანს, პროგრამა კი გამოთვლის საშუალო ნიშანს თითოეული
სტუდენტისთვის და გამოაცხადებს საუკეთესოს.
"""
# 1
def function(num):
     name1 = (input("Enter first student's name:"))
     grade1 = (input("Enter first student's grade:"))

     name2 = (input("Enter second student's name:"))
     grade2 = (input("Enter second student's grade:"))

     if grade1 > grade2:
          return f"student with the highest grade is: {name1}"
     elif grade2 > grade1:
          return f"student with the highest grade is: {name2}"
     
"""
პროექტის აღწერა:
პრობლემა: შექმენით პროგრამა, რომელიც დაამუშავებს სტუდენტების
ქულების სიას და მოიძებნის მაქსიმალურ, მინიმალურ და საშუალო ქულას.
"""
#2
def fnction():
            
    grades = []

    if grades:
      
      max_grade = max(grades)
      return f"მაქსიმალური ქულა: {max_grade}"
    
      min_grade = min(grades)
      return f"მინიმალური ქულა: {min_grade}" 
    
      avg_grade = sum(grades) / len(grades)
      return f"საშუალო ქულა: {avg_grade:.2f}"

"""
პრობლემა: დაწერეთ პროგრამა,
 რომელიც ფილტრავს სტუდენტების ქულებს, 
 ისე რომ დარჩეს მხოლოდ ისინი, ვისაც აქვს 50-ზე მეტი ქულა.
"""
#3
def function(grade):
     if grade < 50:
        return "your grade is lower than 50"
     elif grade > 50:
        return "your grade is higher than 50"
"""
პროექტის აღწერა:  რიცხვების შებრუნება
პრობლემა: დაწერეთ პროგრამა, რომელიც შებრუნებულად
გამოიტანს მომხმარებლის მიერ შეყვანილ რიცხვების სიას.
"""
#4
def function():
    list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return list[::-1]
"""
პროექტის აღწერა:  საშუალო მნიშვნელობის პოვნა
პრობლემა: დაწერეთ პროგრამა, რომელიც გამოთვლის
მომხმარებლის მიერ შეყვანილი რიცხვების სიის საშუალო მნიშვნელობას.
"""
#5
def function():
    list[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    average_number = sum(list) // len(list)