def search(numbers, start, end):
    min_element = numbers[start]
    min_element_index = start

    for i in range(start + 1, end):
        if numbers[i] < min_element:
            min_element = numbers[i]
            min_element_index = i

    return min_element_index


def selection_sort(numbers):
    n = len(numbers)

    for index in range(n - 1):
        min_element_index = search(numbers, index, n)
        numbers[index],
        numbers[min_element_index] = numbers[min_element_index], numbers[index]

    return numbers
