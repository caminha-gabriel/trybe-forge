import json
import csv

with open("books.json") as books_file:
    books = json.load(books_file)


def create_book_categories(books_content):
    book_categories = []
    for book in books_content:
        book_categories.append(book["categories"])
    return book_categories


def create_category_quantities(book_categories):
    category_quantities = {}
    for categories_list in book_categories:
        for category in categories_list:
            if category:
                if category.capitalize() not in category_quantities:
                    category_quantities[category.capitalize()] = 1
                else:
                    category_quantities[category.capitalize()] += 1
    return category_quantities


def convert_to_percentages(category_quantities, books_quantity):
    for key, value in category_quantities.items():
        category_quantities[key] = round(value / books_quantity, 4)
    return category_quantities


books_quantity = len(books)
book_categories = create_book_categories(books)
category_quantities = create_category_quantities(book_categories)
category_percentages = convert_to_percentages(
    category_quantities, books_quantity
    )

with open("books.csv", "w", encoding="utf-8") as file:
    headers = ["Category", "Percentage"]

    writer = csv.DictWriter(file, fieldnames=headers)
    writer.writeheader()
    for category, percentage in category_percentages.items():
        row = {"Category": category, "Percentage": percentage}
        writer.writerow(row)
