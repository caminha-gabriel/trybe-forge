const asyncSum = (a, b, callback) => {
  setTimeout(() => {
    const result = a + b;
    callback(result);
  }, 500);
};

test('Testando asyncSum, soma 5 mais 10', done => {
  asyncSum(5, 10, result2 => {
    try {
      console.log(result2);
      expect(result2).toBe(15);
      done();
    } catch (error) {
      done(error);
    }
  });
});