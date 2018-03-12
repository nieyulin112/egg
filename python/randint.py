# 列表，字典，集合
from random import randint
data = [randint(-10, 10) for _ in range(10)]
print('data', data)
# lambda的应用， filter的应用
values = filter(lambda val: val > 0, data)

d = {x: randint(60, 100) for x in range(1, 21)}
# dics 的过滤
dics = {k: v for k, v in d.items() if v > 95}
print('dics', dics)
# 集合解析
s = set(data)
print('s', s)
sets = {x for x in s if x % 3 == 0}
print('sets', sets)
