# 1
name = input("Enter your name: ")
age = int(input("Enter your age: "))

sentence = "Hello, {}! You are {} years old.".format(name, age)
print(sentence)


# 2
words = ["Python", "is", "fun"]

sentence = " ".join(words)
print(sentence)


# 3
sentence = input("Enter a sentence: ")

words = sentence.split()
print(words)


# 4
sentence = input("Enter a sentence: ")
old_word = input("Enter the word to replace: ")
new_word = input("Enter the new word: ")

modified_sentence = sentence.replace(old_word, new_word)
print(modified_sentence)

# 5
text = input("Enter a string: ")

lowercase_text = text.lower()
print(lowercase_text)


# 6
sentence = input("Enter a sentence: ")

uppercase_sentence = sentence.upper()
print(uppercase_sentence)