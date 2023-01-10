from return_valid_emails import return_valid_emails


def test_return_valid_emails_returns_correct_list():
    assert return_valid_emails(
      ["username@site.ext", "username#@site.ext", "another@domain.et"]
      ) == ["username@site.ext", "another@domain.et"]

    assert return_valid_emails([]) == []
