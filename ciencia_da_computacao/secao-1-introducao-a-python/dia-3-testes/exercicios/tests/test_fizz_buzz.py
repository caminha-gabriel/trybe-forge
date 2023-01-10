import pytest
from fizz_buzz import fizz_buzz


def test_fizz_buzz_raises_value_error_when_not_receiving_a_valid_number():
    with pytest.raises(ValueError):
        fizz_buzz("")
    with pytest.raises(ValueError):
        fizz_buzz("6")


def test_fizz_buzz_raises_type_error_when_not_receiving_a_value():
    with pytest.raises(TypeError):
        fizz_buzz()


def test_fizz_buzz_returns_correct_list():
    assert fizz_buzz(3) == [1, 2, "Fizz"]
    assert fizz_buzz(5) == [1, 2, "Fizz", 4, "Buzz"]
    assert fizz_buzz(6) == [1, 2, "Fizz", 4, "Buzz", "Fizz"]
    assert fizz_buzz(15) == [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8,
                             "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
