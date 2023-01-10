ABC = ("ABC", "2")
DEF = ("DEF", "3")
GHI = ("GHI", "4")
JKL = ("JKL", "5")
MNO = ("MNO", "6")
PQRS = ("PQRS", "7")
TUV = ("TUV", "8")
WXYZ = ("WXYZ", "9")


def translate_to_phone_number(expression):
    if expression == "" or not expression:
        raise TypeError("Expression not valid")

    if len(expression) > 30:
        raise ValueError("Expression should've be smaller than 30 characters")

    translation = ""
    for char in expression:
        if char == "-" or char.isdigit():
            translation += str(char)
        elif char.upper() in ABC[0]:
            translation += ABC[1]
        elif char.upper() in DEF[0]:
            translation += DEF[1]
        elif char.upper() in GHI[0]:
            translation += GHI[1]
        elif char.upper() in JKL[0]:
            translation += JKL[1]
        elif char.upper() in MNO[0]:
            translation += MNO[1]
        elif char.upper() in PQRS[0]:
            translation += PQRS[1]
        elif char.upper() in TUV[0]:
            translation += TUV[1]
        elif char.upper() in WXYZ[0]:
            translation += WXYZ[1]
        else:
            raise ValueError("Characters should only be digits or '-'")
    return translation


print(translate_to_phone_number("MY-MISERABLE-JOB"))
