def bigger_string(list):
    bigger_elem = ""
    for string in list:
        if len(string) > len(bigger_elem):
            bigger_elem = string
    return bigger_elem


names_list = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]
print(bigger_string(names_list))
