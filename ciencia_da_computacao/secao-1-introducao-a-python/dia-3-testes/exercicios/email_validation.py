def email_is_valid(email):
    if "@" not in email or "." not in email:
        raise ValueError("Email must have a 'username@site.extension' format")

    [username, site_with_extension] = email.split("@")
    [site, extension] = site_with_extension.split(".")

    for char in username:
        if char.isalnum() or char.isdigit() or char == "-" or char == "_":
            pass
        else:
            raise ValueError("Invalid username characters")
    if not username[0].isalpha():
        raise ValueError("username must start with a letter")

    for char in site:
        if char.isalpha() or char.isnumeric():
            pass
        else:
            raise ValueError(
              "site name should contain only letters and digits"
              )

    if len(extension) > 3:
        raise ValueError("extension should not be bigger than 3 characters")

    return True


if __name__ == "__main__":
    print(email_is_valid("username@site.ext"))
