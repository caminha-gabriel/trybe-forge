def define_triangle(side1, side2, side3):
    if side1 + side2 + side3 < 180:
        return "Isn't a triangle"
    elif side1 == side2 == side3:
        return "Equilateral Triangle: all equal sides"
    elif side1 != side2 and side1 != side3 and side2 != side3:
        return "Scalene Triangle: different sides"
    elif side1 == side2 or side1 == side3 or side2 == side3:
        return "Isosceles Triangle: two equal sides"


print(define_triangle(80, 60, 70))
