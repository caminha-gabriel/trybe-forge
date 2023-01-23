import pip._vendor.requests as requests

url = "https://httpbin.org/encoding/utf8"
response = requests.get(url)
print(response.text)
