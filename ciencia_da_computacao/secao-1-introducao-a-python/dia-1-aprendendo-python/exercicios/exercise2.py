def calc_average(list):
    sum = 0
    average = 0
    for number in list:
        sum += number
    average = sum / len(list)
    return average


number_list = [4, 6, 8, 2]
print(calc_average(number_list))
