import math


def paint_prices(painting_area):
    canister_price = 80
    required_liters = painting_area / 3
    required_canisters = math.ceil(required_liters / 18)
    print((required_canisters, required_canisters * canister_price))


paint_prices(109)
