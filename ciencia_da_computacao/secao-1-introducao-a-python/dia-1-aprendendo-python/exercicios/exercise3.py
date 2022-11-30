def print_dots(value):
    if value > 1:
        lines = 1
        while lines <= value:
            print("*" * value)
            lines += 1


print_dots(3)
