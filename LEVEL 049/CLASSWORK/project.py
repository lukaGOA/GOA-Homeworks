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

