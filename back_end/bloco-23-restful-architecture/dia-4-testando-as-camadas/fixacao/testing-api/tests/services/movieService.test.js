const sinon = require('sinon');
const { expect } = require('chai');
const MovieModel = require('../../models/movieModel');
const MoviesService = require('../../services/movieService');

describe('Testing movieService layer', () => {
  describe('Insert a new Movie in DB', () => {
    describe('When payload is not valid', () => {
      const payloadMovie = {};
  
      it('returns a boolean', async () => {
        const response = await MoviesService.create(payloadMovie);
  
        expect(response).to.be.a('boolean');
      });
  
      it('boolean is false', async () => {
        const response = await MoviesService.create(payloadMovie);
  
        expect(response).to.be.equal(false);
      });
  
    });
  
    describe('When inserted with success', () => {
      const payloadMovie = {
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      };
  
      before(() => {
        const ID_EXAMPLE = 1;
  
        sinon.stub(MovieModel, 'create').resolves({ id: ID_EXAMPLE });
      });
  
      after(() => {
        MovieModel.create.restore();
      });
  
      it('returns an object', async () => {
        const response = await MoviesService.create(payloadMovie);
  
        expect(response).to.be.a('object');
      });
  
      it('has the "id" of the new movie', async () => {
        const response = await MoviesService.create(payloadMovie);
  
        expect(response).to.have.a.property('id');
      });
  
    });
  });
});