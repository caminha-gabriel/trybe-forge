import pytest
from translate import translate_to_phone_number


def test_translate_to_phone_number_returns_correct_message():
    assert translate_to_phone_number(
      "1-HOME-SWEET-HOME"
      ) == "1-4663-79338-4663"

    assert translate_to_phone_number(
      "MY-MISERABLE-JOB"
      ) == "69-647372253-562"


def test_translate_to_phone_number_returns_correct_errors():
    with pytest.raises(TypeError):
        translate_to_phone_number()
    with pytest.raises(TypeError):
        translate_to_phone_number("")

    with pytest.raises(ValueError):
        translate_to_phone_number("1234567890123456789012345678901")

    with pytest.raises(ValueError):
        translate_to_phone_number("MY-@@@@@@-JOB")
