def fizz_buzz(number):
    if not isinstance(number, int):
        raise ValueError("Input should be a numeric value")

    number_list = []
    for number in range(1, number + 1):
        if number % 3 == 0 and number % 5 == 0:
            number_list.append("FizzBuzz")
        elif number % 3 == 0:
            number_list.append("Fizz")
        elif number % 5 == 0:
            number_list.append("Buzz")
        else:
            number_list.append(number)
    return number_list


print(fizz_buzz(5))
