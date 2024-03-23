def main():
    l = input()
    i, j = 0, 0
    leng = len(l)
    while i != leng:
        if l[i] == l[j]:
            a, count = l[i], 0
            while (j != leng) and (l[i] == l[j]):
                count += 1
                j += 1
            print(f"({count}, {a})", end=' ')
            i = j
        else:
            j += 1


if __name__ == "__main__":
    main()