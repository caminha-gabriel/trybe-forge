import pytest
from codigo import is_odd, divide

def test_is_odd_when_number_is_odd_returns_true():
    'Function should return True when receiving an odd number'
    assert is_odd(3) is True


def test_is_odd_when_number_is_even_returns_false():
    'Function should return False when receiving an even number'
    assert is_odd(2) is False

from codigo import is_odd, divide

# ...

def test_divide_when_other_number_is_zero_raises_an_exception():
    with pytest.raises(ZeroDivisionError, match="division by zero"):
        divide(2, 0)
