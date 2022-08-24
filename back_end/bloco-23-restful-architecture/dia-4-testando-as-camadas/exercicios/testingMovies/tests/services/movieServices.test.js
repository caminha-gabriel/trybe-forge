const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../models/connection');

const MoviesModel = require('../../models/movieModel');
const MoviesService = require('../../services/movieService');

describe('Testing Service Layer', () => {
  describe('Insere um novo filme no BD', () => {
    describe('quando o payload informado não é válido', async () => {
      const payloadMovie = {};

      it('retorna um boolean', async () => {
        const response = await MoviesService.create(payloadMovie);

        expect(response).to.be.a('boolean');
      });

      it('o boolean contém "false"', async () => {
        const response = await MoviesService.create(payloadMovie);

        expect(response).to.be.equal(false);
      });

    });

    describe('quando é inserido com sucesso', async () => {
      const payloadMovie = {
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      };

      before(() => {
        const ID_EXAMPLE = 1;

        sinon.stub(MoviesModel, 'create')
          .resolves({ id: ID_EXAMPLE });
      });

      after(() => {
        MoviesModel.create.restore();
      });

      it('retorna um objeto', async () => {
        const response = await MoviesService.create(payloadMovie);

        expect(response).to.be.a('object');
      });

      it('tal objeto possui o "id" do novo filme inserido', async () => {
        const response = await MoviesService.create(payloadMovie);

        expect(response).to.have.a.property('id');
      });

    });
  });
  describe('Check a movie by Id', () => {
    const id = 1;
    describe('When movie info had success', () => {
      before(async () => {
        const getById = {
          id,
          title: 'Up',
          directed_by: 'Jason Momoa',
          release_year: 2012,
        };

        sinon.stub(MoviesModel, 'getById').resolves(getById);
      });

      after(async () => {
        MoviesModel.getById.restore();
      });

      it('returns an object', async () => {
        const response = await MoviesService.getById(id);

        expect(response).to.be.an('object');
      });

      it('returns a code property with value 200', async () => {
        const response = await MoviesService.getById(id);

        expect(response).to.have.property('code');
        expect(response.code).to.be.equal(200);
      });

      it('returns the full movie content in a content property', async () => {
        const response = await MoviesService.getById(id);

        expect(response).to.have.property('content');
        const { content } = response;
        expect(content).to.have.property('id');
        expect(content.id).to.be.equal(1);

        expect(content).to.have.property('title');
        expect(content.title).to.be.equal('Up');

        expect(content).to.have.property('directedBy');
        expect(content.directedBy).to.be.equal('Jason Momoa');

        expect(content).to.have.property('releaseYear');
        expect(content.releaseYear).to.be.equal(2012);
      });
    });
    describe('When movie info had failed', () => {
      before(async () => {
        const getById = null;

        sinon.stub(MoviesModel, 'getById').resolves(getById);
      });

      after(async () => {
        MoviesModel.getById.restore();
      });

      it('returns an object', async () => {
        const response = await MoviesService.getById(id);

        expect(response).to.be.an('object');
      });

      it('returns a code property with value 404', async () => {
        const response = await MoviesService.getById(id);

        expect(response).to.have.property('code');
        expect(response.code).to.be.equal(404);
      });

      it('returns a message property with value "Movie not found"', async () => {
        const response = await MoviesService.getById(id);

        expect(response).to.have.property('message');
        expect(response.message).to.be.equal('Movie not found');
      });
    });
  });
});