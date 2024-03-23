def vowel(l):
    return l in ['a', 'e', 'i', 'o', 'u', 'y']

def s_words(w):
    cnt = 0
    for i in w:
        num_vowels = 0
        for l in i:
            if vowel(l):
                num_vowels += 1
        if num_vowels % 2 == 0:
            cnt += 2
        else:
            cnt += 1
    return cnt
n = int(input())
w = input().split()
print(s_words(w))