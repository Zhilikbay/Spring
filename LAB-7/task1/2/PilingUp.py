a = int(input())
for i in range(a):
    n = int(input())
    li = [int(num_str) for num_str in input().split()]
    ic = False
    for j in range(1, n, 1):
        if li[j] < li[j - 1] and ic:
            print('No')
            break
        if li[j] > li[j - 1]:
            ic = True
        if j == n - 1:
            print('Yes')