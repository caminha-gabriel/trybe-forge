from selenium.webdriver.common.keys import Keys
from selenium import webdriver

firefox = webdriver.Firefox()

response = firefox.get("https://www.google.com.br/")

search_input = firefox.find_element("name", "q")

search_input.send_keys("selenium")

search_input.send_keys(Keys.ENTER)