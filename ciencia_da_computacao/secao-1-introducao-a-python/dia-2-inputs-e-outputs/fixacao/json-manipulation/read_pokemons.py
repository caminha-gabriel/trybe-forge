import json

with open("pokemons.json") as file:
    content = file.read(file)
    pokemons = json.loads(content)["results"]

# with open("pokemons.json") as file:
#     pokemons = json.load(file)["results"]

print(pokemons[0])
