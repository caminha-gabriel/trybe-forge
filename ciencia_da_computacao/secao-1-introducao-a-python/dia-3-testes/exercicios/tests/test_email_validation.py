import pytest
from email_validation import email_is_valid


def test_email_is_valid_returns_true():
    assert email_is_valid("username@site.ext") is True


def test_email_is_valid_returns_value_error_when_incorrect_format():
    with pytest.raises(ValueError):
        email_is_valid("username.site.ext")
    with pytest.raises(ValueError):
        email_is_valid("username@site@ext")
    with pytest.raises(ValueError):
        email_is_valid("usernamesiteext")


def test_email_is_valid_returns_value_error_when_incorrect_username():
    with pytest.raises(ValueError):
        email_is_valid("4sername@site.ext")


def test_email_is_valid_returns_value_error_when_incorrect_site():
    with pytest.raises(ValueError):
        email_is_valid("username@si--te.ext")


def test_email_is_valid_returns_value_error_when_incorrect_extension():
    with pytest.raises(ValueError):
        email_is_valid("username@site.extension")
