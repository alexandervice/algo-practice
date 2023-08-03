# This is a list of things to refresh my memory on python

if 5 > 2:
    print("Five is greater than two!")  # this line is part of the 'if' block
#______________________________________________________________________________

# This is a comment
print("Hello, World!")  # This is also a comment

#______________________________________________________________________________
x = 5  # an integer
y = "Hello, World!"  # a string
z = 3.14  # a float
a = True  # a boolean

#______________________________________________________________________________
# a list
my_list = [1, 2, 3, 4, 5]
# a dictionary
my_dict = {
              'name': 'John',
              'age': 27
          }
# a set
my_set = {1, 2, 3}
# a tuple
my_tuple = (1, 2, 3)

#______________________________________________________________________________
# if statement
x = 5
if x > 0:
    print("x is positive")

# for loop
for i in range(5):
    print(i)

# while loop
while x > 0:
    print(x)
    x -= 1

#______________________________________________________________________________
def greet(name):
    print(f"Hello, {name}!")

greet("Alice")  # prints "Hello, Alice!"

#______________________________________________________________________________
def make_multiplier(factor):
    def multiplier(x):
        return x * factor
    return multiplier

double = make_multiplier(2)
print(double(5))  # prints 10

#______________________________________________________________________________
class Dog:
    def __init__(self, name):
        self.name = name

    def bark(self):
        print(f"{self.name} says woof!")

fido = Dog("Fido")
fido.bark()  # prints "Fido says woof!"

#______________________________________________________________________________
try:
    # risky operation
    print(1/0)
except ZeroDivisionError:
    print("You can't divide by zero!")

#______________________________________________________________________________
# Importing a whole module
import math
print(math.sqrt(16))  # prints 4

# Importing a specific function from a module
from math import sqrt
print(sqrt(16))  # prints 4

# Importing a module with an alias
import numpy as np
print(np.sqrt(16))  # prints 4.0

# Add anything new below. Practice makes perfect.
