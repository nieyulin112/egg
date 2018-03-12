val = input('请输入带温度');
if val[-1] in ['C', 'c']:
    f = 1.8 * float(val[0:-1]) + 32
    print(f)
elif val[-1] in ['F', 'f']:
    c = (float(val[0: -1]) - 32)
    print(c);
else:
    print('输入有误')
