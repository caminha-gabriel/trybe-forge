from email_validation import email_is_valid


def return_valid_emails(email_list):
    new_list = []
    for email in email_list:
        try:
            if email_is_valid(email):
                new_list.append(email)
        except ValueError:
            pass

    return new_list


print(return_valid_emails(['username@site.ext']))
