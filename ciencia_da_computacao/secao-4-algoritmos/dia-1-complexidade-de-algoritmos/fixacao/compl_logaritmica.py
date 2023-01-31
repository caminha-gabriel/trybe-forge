# # A estrutura deve estar ordenada para que a busca binária funcione
# def binary_search(numbers, target):
#     start = 0
#     end = len(numbers) - 1

#     while start <= end:
#         mid = (start + end) // 2 # encontro o meio

#         if numbers[mid] == target:
#             return mid

#         if target < numbers[mid]:
#             end = mid - 1
#         else:
#             start = mid + 1

#     return -1

# numbers = [2, 3, 4, 10, 40]
# target = 40

# result = binary_search(numbers, target)
# print(f"Elemento encontrado na posição: {result}")

def binary_search(array1, array2):
    response_array = []
    for number1 in array1:
        start = 0
        end = len(array2) - 1

        while start <= end:
            mid = (start + end) // 2
            print('iterating', mid)

            if array2[mid] == number1:
                response_array.append(array2[mid])
                break

            if array2[mid] < number1:
                start = mid + 1

            else:
                end = mid - 1

        response_array.append(-1)

    print(response_array)


binary_search([10, 25], [5, 10, 15, 20, 30])
