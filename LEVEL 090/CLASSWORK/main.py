# 1
# list - პითონში list-ში შეგვიძლია შევიტანოთ ნებისმიერი ტიპის მნიშვნელობა, მას აქვს ინდექსირება და არის mutable ანუ ჩვენ შეგვიძლია შევცვალოთ მასში მოცემული მნიშვნელობები სხვადასხვა ფუნქციების დახმარებით (მაგალითად .append, .pop)

# tuple - პითონში tuple-ში ისევე როგორც პითონში შეგვიძლია შევიტანოთ ნებისმიერი ტიპის მნივნელობა, მას აქვს ინდექსირება და არის immutable ანუ ჩვენ არ შეგვიძლია შევცვალოთ მოცემული მნიშველობები append-ით და pop-ით

# set - პითონში set-ში შეგვიძლია შევიტანოთ ნებისმიერი ტიპის მნიშვნელობა, და არის mutable, მაგრამ მას არ აქვს ინდექსირება და ინდექსაცია

# 2
list1 = [1,2,3,4,5]

tuple1 = (1,2,3,4,5)

set1 = {1,2,3,4,5}

# 3
tuple2 = (1,2,3,4,5,)
tuple.append(1)
# აქ ეს კოდი არ იმუშავებს რადგან append არ მუშაობს tuple-თან

