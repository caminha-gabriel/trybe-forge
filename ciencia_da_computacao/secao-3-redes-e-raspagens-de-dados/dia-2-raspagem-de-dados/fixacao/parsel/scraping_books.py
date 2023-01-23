from parsel import Selector
import pip._vendor.requests as requests

# titles = selector.css(".product_pod h3 a::attr(title)").getall()
# prices = selector.css(".price_color::text").getall()

BASE_URL = "http://books.toscrape.com/catalogue/"
next_page_url = 'page-1.html'

while next_page_url:
    response = requests.get(BASE_URL + next_page_url)
    selector = Selector(text=response.text)

    for product in selector.css(".product_pod"):
        title = product.css("h3 a::attr(title)").get()
        price = product.css(".price_color::text").re(r"£\d+\.\d{2}")[0]

        detail_href = product.css("h3 a::attr(href)").get()
        detail_page_url = BASE_URL + detail_href

        detail_response = requests.get(detail_page_url)
        detail_selector = Selector(text=detail_response.text)

        description = detail_selector.css(
          "#product_description ~ p::text"
          ).get()
        SUFFIX = "...more"

        if description.endswith(SUFFIX):
            description = description[:-len(SUFFIX)]
        print(title, price)
        print(description)

    next_page_url = selector.css(".next a::attr(href)").get()
