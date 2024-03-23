x = int(input())
a = str(x)
cnt = 0
for i in a[::-1]:
    i = int(i)
    cnt *= 10
    cnt += i

print(cnt)
