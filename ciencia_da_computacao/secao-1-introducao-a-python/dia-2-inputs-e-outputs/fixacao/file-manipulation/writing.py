cities_file = open("cities.txt", mode="w")

cities_file.write("Arkhan\n")
cities_file.write("Saint Denis\n")

print("Demacia\n", file=cities_file)

# LINES = ["Arkhan\n", "Saint Denis\n", "Demacia\n"]
# cities_file.writelines(LINES)

cities_file.close()

cities_file = open("cities.txt", mode="r")
content = cities_file.read()
print(content)

# for line in cities_file:
#     print(line)

cities_file.close()
