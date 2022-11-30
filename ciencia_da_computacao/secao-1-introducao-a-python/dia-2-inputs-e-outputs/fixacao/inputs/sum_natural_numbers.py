def sum_natural_numbers():
    sum = 0
    numbers = input("Type your natural numbers separated by spaces: ").split()

    for elem in numbers:
        if not elem.isdigit():
            return print(f'Error in the sum, "{elem}" is an invalid value')
        else:
            sum += int(elem)
    print(f'Your sum is {sum}')


sum_natural_numbers()
