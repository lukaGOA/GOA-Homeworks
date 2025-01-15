# 1
# tuple - პითონში tuple-ში ისევე როგორც პითონში
#  შეგვიძლია შევიტანოთ ნებისმიერი ტიპის მნივნელობა,
#  მას აქვს ინდექსირება და არის immutable ანუ 
# ჩვენ არ შეგვიძლია შევცვალოთ მოცემული მნიშველობები append-ით და pop-ით

# 2
# Tuple destructuring ეწოდება მეთოდს,
# სადაც ტუპლიდან თითოეული ელემენტი 
# განიხილება ცალკე ცვლადებად, რაც ამარტივებს
# მონაცემების ხელახლა გამოყენებას.

# 1 მაგალითი
point = (3, 4)
x, y = point
print(x)  
print(y) 

# 2 მაგალითი
person = ("luka", 14, "Tbilisi")
name, age, city = person
print(name) 
print(age)   
print(city)  

# 3 მაგალითი
data = (1, 2, 3, 4)
a, *rest = data
print(a)    
print(rest) 

# 3
list1 = [1, 2, 2, 3, 4, 4, 5]

list_in_set = set(list1)
print(list_in_set)