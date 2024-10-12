#1
def count_items(item_list, item):
    return item_list.count(item)
#2
def sum_of_list(num_list):
    total = 0
    for num in num_list:
        total += num
    return total
#3
def average_of_list(num_list):
    if len(num_list) == 0:
        return 0  
    total = sum_of_list(num_list)
    return total / len(num_list)
#4
def reverse_list(items):
    reversed_list = []
    for item in items:
        reversed_list.insert(0, item)  
    return reversed_list
