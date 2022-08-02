const { expect } = require('chai');
const fs = require('fs');
const sinon = require('sinon');
const checkNumberSignal = require('./index');

const writeOnFile = (fileName, content) => {
  if (!(fileName && content)) return 'Invalid parameters';
  if (!(typeof (fileName) === 'string' && typeof (content) === 'string')) return 'Parameters must be strings';

  fs.writeFileSync(fileName, content);
  return 'ok';
};

describe('Testing checkNumberSignal function', () => {
  describe('When param is not a number', () => {
    ;
    const response = checkNumberSignal('I am not a number');
  
    it('return an error message', () => {
      expect(response).to.be.equal('Error: Did not received a number');
    });
  
    it('return a string', () => {
      expect(response).to.be.a('string');
    });
  });
  
  describe('When param is higher than 0', () => {
    const response = checkNumberSignal(6);
    it('return a string', () => {
      expect(response).to.be.a('string');
    });
  
    it('return "positive"', () => {
      expect(response).to.equal('positive');
    });
  });
  
  describe('When param is lower than 0', () => {
    const response = checkNumberSignal(-23);
      it('return a string', () => {
        expect(response).to.be.a('string');
      });
  
    it('return "negative"', () => {
      expect(response).to.equal('negative');
    });
  });
  
  describe('When param is equal to 0', () => {
    const response = checkNumberSignal(0);
    it('return a string', () => {
      expect(response).to.be.a('string');
    });
  
    it('return "neutral"', () => {
      expect(response).to.equal('neutral');
    });
  });
});

describe('Testing writeOnFile function', () => {
  describe('When parameters are valid', () => {
    before(() => {
      sinon.stub(fs, 'writeFileSync').returns("ok");
    });

    after(() => {
      fs.writeFileSync.restore();
    });
      it('return "ok"', () => {
        const response = writeOnFile('./textFile.txt', 'insert this on file');
        expect(response).to.be.equals('ok');
      });

      it('return a string', () => {
        const response = writeOnFile('./textFile.txt', 'insert this on file');
        expect(response).to.be.a('string');
      });
    });

  describe('When parameters are null', () => {
    before(() => {
      sinon.stub(fs, 'writeFileSync').returns("Invalid parameters");
    });

    after(() => {
      fs.writeFileSync.restore();
    });

    it('return "Invalid parameters"', () => {
      const response = writeOnFile();
      expect(response).to.be.equals('Invalid parameters');
    });
  });

  describe('When parameters are not strings', () => {
    before(() => {
      sinon.stub(fs, 'writeFileSync').returns("Invalid parameters");
    });

    after(() => {
      fs.writeFileSync.restore();
    });

    it('return "Parameters are not strings"', () => {
      const response = writeOnFile(14, 3000);
      expect(response).to.be.equals('Parameters must be strings');
    });
  });
});