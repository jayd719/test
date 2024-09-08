from os import system
from random import randint
system("clear")

def shuffle(arr):
    upperBound = len(arr)-1
    for i in range(upperBound):
        i = randint(0,upperBound)
        j = randint(0,upperBound)
        arr[i],arr[j] = arr[j],arr[i]
    return arr

NODES = 5
arr = shuffle(list(range(NODES)))
print(arr)