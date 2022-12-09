name = input('Type your name: ')


def print_inverted_vertical(str):
    string_to_print = str
    for _ in str:
        print(string_to_print)

        string_to_print = string_to_print[:-1]


print_inverted_vertical(name)
