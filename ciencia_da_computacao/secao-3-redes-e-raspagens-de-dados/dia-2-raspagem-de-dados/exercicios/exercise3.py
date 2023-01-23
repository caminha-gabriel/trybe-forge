import pip._vendor.requests as requests


url = "https://scrapethissite.com/pages/advanced/?gotcha=headers"
response = requests.get(url, headers={
  "User-agent": "Mozilla", "Accept": "text/html"
  })

assert "bot detected" not in response.text
print(response.text)
