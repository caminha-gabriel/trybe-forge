import random


def scrambled_game(file_name):
    with open(file_name, mode='r') as file:
        content = file.readlines()
    attempts_left = 3
    chosen_word = random.choice([word.strip() for word in content])
    scrambled_word = "".join(random.sample(chosen_word, len(chosen_word)))

    print(f'Can you guess what word is {scrambled_word}?')

    for _ in range(0, attempts_left):
        if attempts_left > 0:
            guess = input('Type your guess: ')
            if guess == chosen_word:
                print(f'Winner!! The word was "{chosen_word}"')
                break
            else:
                attempts_left -= 1
                print(f'You have {attempts_left} attempts left')


scrambled_game("capitals.txt")
