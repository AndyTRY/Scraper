import sys
from bs4 import BeautifulSoup as soup
from selenium import webdriver

DRIVER_PATH = '/usr/local/share/chromedriver'
driver = webdriver.Chrome(executable_path=DRIVER_PATH)
my_url = "https://www.newegg.ca/p/pl?d=" + sys.argv[1]

driver.get(my_url)
page_soup = soup(driver.page_source, "html.parser")

item_container = page_soup.findAll("div", {"class": "item-container"})

#Remove Suggestions
suggest = page_soup.findAll("div", {"class": "search-suggestions"})
try:
    suggest_container = suggest[0].findAll("div", {"class": "item-container"})
    for sug in suggest_container:
        if sug in item_container:
            index = item_container.index(sug)
            del item_container[index]
except IndexError:
    print("NoSuggests")


filename = "./public/ProductFiles/NeweggProduct.txt"
f = open(filename, "w")

i = 0
for container in item_container:

    Link = container.a["href"]
    Title = container.a.img["title"]

    Price = "Unavaliable"
    Shipping = "Unavaliable"
    price_item_container = container.findAll("div", {"class": "item-action"})
    try:
        if len(price_item_container[0].ul["class"]) == 1:
            price_current = price_item_container[0].ul.findAll("li", {"class": "price-current"})
            PriceDollar = price_current[0].strong.text
            PriceCent = price_current[0].sup.text
            Price = PriceDollar + PriceCent
        else:
            Price = "Unavaliable"
    except IndexError:
        #print("PriceIdxErr", i)

    Stock = "In Stock"
    item_promo = container.div.findAll("p", {"class": "item-promo"})
    if len(item_promo) > 0:
        if item_promo[0].text == "OUT OF STOCK":
            Stock = "Out of Stock"

    Rating = "None"
    ReviewNum = "0"
    item_rating = container.div.div.findAll("a", {"class": "item-rating"})
    try:
        if len(item_rating) != 0:
            Rating = item_rating[0]["title"][-1] + "/5"
            ReviewNum = item_rating[0].span.text[1:-1]
    except KeyError:
        #print("RatingKeyErr", i)

    Brand = ""
    item_brand = container.div.div.findAll("a", {"class": "item-brand"})
    if len(item_brand) != 0:
        Brand = item_brand[0].img["title"]
    f.write(Title + "\n" + Brand + "\n" + Price + "\n" + Rating + "\n" + ReviewNum + "\n" + Stock + "\n"
            + Link + "\n\n")
    i += 1

f.close()
driver.close()





