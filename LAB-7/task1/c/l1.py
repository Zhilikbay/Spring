n = input()

cnt = 0
p = 1

for i in reversed(n):
    i = int(i)
    cnt += i * p
    p *= 2
print(cnt)
