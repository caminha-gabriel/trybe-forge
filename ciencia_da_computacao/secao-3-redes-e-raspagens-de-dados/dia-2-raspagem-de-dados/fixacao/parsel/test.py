from parsel import Selector
import pip._vendor.requests as requests

# BASE_URL = "http://books.toscrape.com/catalogue/"

# response = requests.get(BASE_URL + "page-1.html")
# selector = Selector(text=response.text)

# href = selector.css(".product_pod h3 a::attr(href)").get()
# detail_page_url = BASE_URL + href

# detail_response = requests.get(detail_page_url)
# detail_selector = Selector(text=detail_response.text)

# description = detail_selector.css("#product_description ~ p::text").get()
# print(description)


# response = requests.get("http://books.toscrape.com/")
# selector = Selector(text=response.text)

# prices = selector.css(".product_price .price_color::text").re(r"£\d+\.\d{2}")
# print(prices)


response = requests.get(
  "http://books.toscrape.com/catalogue/a-light-in-the-attic_1000/index.html"
  )
selector = Selector(text=response.text)

description = selector.css("#product_description ~ p::text").get()
suffix = "...more"

if description.endswith(suffix):
    description = description[:-len(suffix)]
print(description)
