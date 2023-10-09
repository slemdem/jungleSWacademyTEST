def count_fruit(target):
    count = 0
    for fruit in fruits:
        if fruit == target:
            count+=1
    return count

fruits = ['사과','배','배','감','수박','귤','딸기','사과','배','수박']

apple_count = count_fruit('사과')
print(apple_count)