def multiply_arrays(array1, array2):
    result = []
    number_of_iterations = 0

    for number1 in array1:
        print(f'Array 1: {number1}')
        for number2 in array2:
            print(f'Array 2: {number2}')
            result.append(number1 * number2)
            number_of_iterations += 1

    print(f'{number_of_iterations} iterações!')
    return result


meu_array = [1, 2, 3, 4, 5, 6]

multiply_arrays(meu_array, meu_array)


def three__multiply_loop(array):
    result = []
    number_of_iterations = 0

    for number in array:
        result.append(number + number)
        for number in array:
            result.append(number - number)
            for number in array:
                result.append(number + number)
                number_of_iterations += 1

    print(result)
    print(f'{number_of_iterations} iterações!')
    return result


three__multiply_loop([1, 2])
