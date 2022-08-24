const { expect } = require('chai');
const sinon = require('sinon');
const movieModel = require('../../models/movieModel');
const connection = require('../../models/connection');

describe('Testing movieModel layer', () => {
  describe('Insert a new movie in DB', () => {
    
    before(async () => {
      const execute = [{ insertId: 1 }];
      
      sinon.stub(connection, 'execute').resolves(execute);
    });
    
    after(async () => {
      connection.execute.restore();
    });
    
    describe('When is inserted with success', () => {
      const payloadMovie = {
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      }
  
      it('returns an object', async () => {
        const response = await movieModel.create(payloadMovie);
  
        expect(response).to.be.a('object');
      });
  
      it('has the "id" of the new movie', async () => {
        const response = await movieModel.create(payloadMovie);
  
        expect(response).to.have.a.property('id');
      });
    });
  });
});