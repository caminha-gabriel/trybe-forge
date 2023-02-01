def recursive_sum(n):
    if n == 1:
        return n
    else:
        return n + recursive_sum(n - 1)


print(recursive_sum(4))
