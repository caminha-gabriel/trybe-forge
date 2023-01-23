import pip._vendor.requests as requests
from parsel import Selector


url = "http://books.toscrape.com/catalogue/the-grand-design_405/index.html"
response = requests.get(url)
selector = Selector(text=response.text)

book_title = selector.css(".product_main h1::text").get()
book_price = selector.css(".price_color::text").get()[2:]
book_image_url = selector.css(".thumbnail img::attr(src)").get()
book_description = selector.css("#product_description ~ p::text").get()

SUFFIX = "...more"
if book_description.endswith(SUFFIX):
    book_description = book_description[:-len(SUFFIX)]


print(f"""Title: {book_title}
Price: {book_price}
ImageUrl: {book_image_url}
Description:
{book_description}""")
