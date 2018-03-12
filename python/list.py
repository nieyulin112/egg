from random import randint
data = [randint(-10, 10) for _ in xrange(10)]
print(data)
y = filter(lambda x: x>=0, data)
print(y)
