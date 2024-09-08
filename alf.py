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



def bubbleSort(arr):
    arr_len = len(arr)
    for i in range(arr_len):
        for j in range(i,arr_len):
            if(arr[i]>arr[j]):
                arr[i],arr[j] = arr[j],arr[i]
    return arr

NODES = 20
arr = shuffle(list(range(NODES)))
print(arr)
arr = bubbleSort(arr)
print(arr)