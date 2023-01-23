import pip._vendor.requests as requests
import json


url = "https://api.github.com/users"
response = requests.get(url)

users = json.loads(response.text)
for user in users:
    print(user["login"], user["url"])
