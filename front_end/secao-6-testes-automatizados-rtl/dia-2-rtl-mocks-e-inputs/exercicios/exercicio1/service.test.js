const {
  randomNumberGenerator,
  toUpperCase,
  firstCharacter,
  concatStrings,
  fetchDogPicturesAPI,
} = require('./service');

describe('Tests randomNumberGenerator function', () => {
  it('should be a function', () => {
    expect.assertions(1);

    expect(typeof(randomNumberGenerator)).toBe('function');
  });

  it('should return a random number between 0 and 100 when called', () => {
    const randomNumberGenerator = jest.fn().mockReturnValue(10);
    const randomNumber = randomNumberGenerator();

    expect.assertions(2);

    expect(randomNumberGenerator).toHaveBeenCalled();
    expect(randomNumber).toBe(10);
  });

  it('should return a 2 numbers division on first all when mocked', () => {
    const randomNumberGenerator = jest
    .fn()
    .mockImplementationOnce((a, b) => {
      return a / b;
    })
    .mockImplementation((a, b) => a + b);

    expect.assertions(4);

    expect(randomNumberGenerator(4, 2)).toBe(2);

    expect(randomNumberGenerator(12, 3)).toBe(15);
    expect(randomNumberGenerator(4, 2)).toBe(6);

    expect(randomNumberGenerator).toBeCalledTimes(3);
  });

  it('should multiply on mock instances', () => {
    const randomNumberGenerator = jest.fn().mockImplementation((a, b, c) => a * b * c);

    expect.assertions(7);

    expect(randomNumberGenerator(2, 4, 6)).toBe(48);
    expect(randomNumberGenerator).toHaveBeenCalledTimes(1);
    
    randomNumberGenerator.mockReset();
    expect(randomNumberGenerator(2, 4, 6)).toBe(undefined);
    expect(randomNumberGenerator).toHaveBeenCalledTimes(1);

    randomNumberGenerator.mockImplementation((a) => a * 2);

    expect(randomNumberGenerator(4)).toBe(8);
    expect(randomNumberGenerator(8)).not.toBe(4);
    expect(randomNumberGenerator).toHaveBeenCalledTimes(3);
  });
});

describe('Tests string manipulation functions', () => {
  it('upperCase function mocked to return lowerCase', () => {
    const toUpperCase = jest.fn().mockImplementation((string) => string.toLowerCase());

    const lowerTest = 'testing string';
    const upperTest = 'TESTING STRING';

    expect.assertions(5);

    expect(toUpperCase(upperTest)).toBe(lowerTest);
    expect(toUpperCase(lowerTest)).toBe(lowerTest);
    expect(toUpperCase).toHaveBeenCalledTimes(2);

    toUpperCase.mockReset();
    toUpperCase.mockImplementation((string) => string.toUpperCase());

    expect(toUpperCase(lowerTest)).toBe(upperTest);
    expect(toUpperCase(upperTest)).toBe(upperTest);
  });

  it('firstCharacter function mocked to return last character', () => {
    const firstCharacter = jest.fn().mockImplementation((string) => string[string.length - 1 ]);
    
    const testingString = 'Testing this function';

    expect.assertions(5);

    expect(firstCharacter(testingString)).toBe('n');
    expect(firstCharacter(testingString)).not.toBe('T');
    expect(firstCharacter).toHaveBeenCalledTimes(2);

    firstCharacter.mockReset();
    firstCharacter.mockImplementation((string) => string[0]);

    expect(firstCharacter(testingString)).toBe('T');
    expect(firstCharacter(testingString)).not.toBe('n');
  });

  it('stringConcat function mocked to return a 3 string concat rather tan a 2', () => {
    const stringConcat = jest.fn().mockImplementation((string1, string2, string3) => string1 + string2 + string3); 

    const testString1 = 'May the 4th ';
    const testString2 = 'be ';
    const testString3 = 'with you';

    expect.assertions(5);

    expect(stringConcat(testString1, testString2, testString3)).toBe('May the 4th be with you');
    expect(stringConcat(testString3, testString2, testString1)).toBe('with yoube May the 4th ');
    expect(stringConcat).toHaveBeenCalledTimes(2);

    stringConcat.mockReset();
    stringConcat.mockImplementation((string1, string2) => string1 + string2 );

    expect(stringConcat(testString1, testString2)).toBe('May the 4th be ');
    expect(stringConcat(testString1, testString2, testString3)).toBe('May the 4th be ');
  });
});

describe('Tests fetchDogPicturesAPI function', () => {
  
  it('should work properly on request sucess', () => {
    const fetchDogPicturesAPI = jest.fn().mockReturnValue('request sucess');

    expect.assertions(2);

    expect(fetchDogPicturesAPI()).toBe('request sucess');
    expect(fetchDogPicturesAPI).toHaveBeenCalledTimes(1);
  });

  it('should work properly on request denied', () => {
    const fetchDogPicturesAPI = jest.fn().mockReturnValue('request denied');

    expect.assertions(2);

    expect(fetchDogPicturesAPI()).toBe('request denied');
    expect(fetchDogPicturesAPI).toHaveBeenCalledTimes(1);
  });
});