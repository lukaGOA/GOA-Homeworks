# 1
def count_words(text):
    words = text.split()
    return len(words)


# 2
def check_number(num):
    if num > 0:
        print("The number is positive.")
    elif num < 0:
        print("The number is negative.")
    else:
        print("The number is zero.")


# 3
def categorize_age(age):
    if age < 18:
        return "You are a minor."
    elif 18 <= age <= 65:
        return "You are an adult."
    else:
        return "You are a senior citizen."

