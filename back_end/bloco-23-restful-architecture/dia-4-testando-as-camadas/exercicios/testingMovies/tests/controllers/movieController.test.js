const sinon = require('sinon');
const { expect } = require('chai');

const MoviesService = require('../../services/movieService');
const MoviesController = require('../../controllers/movieController');

describe('Testing Controller Layer', () => {
  describe('Ao chamar o controller de create', () => {
    describe('quando o payload informado não é válido', async () => {
      const response = {};
      const request = {};

      before(() => {
        request.body = {};

        response.status = sinon.stub()
          .returns(response);
        response.send = sinon.stub()
          .returns();

        sinon.stub(MoviesService, 'create')
          .resolves(false);
      });

      after(() => {
        MoviesService.create.restore();
      });

      it('é chamado o status com o código 400', async () => {
        await MoviesController.create(request, response);

        expect(response.status.calledWith(400)).to.be.equal(true);
      });

      it('é chamado o send com a mensagem "Invalid Data"', async () => {
        await MoviesController.create(request, response);

        expect(response.send.calledWith('Invalid Data')).to.be.equal(true);
      });

    });

    describe('quando é inserido com sucesso', async () => {
      const response = {};
      const request = {};

      before(() => {
        request.body = {
          title: 'Example Movie',
          directedBy: 'Jane Dow',
          releaseYear: 1999,
        };

        response.status = sinon.stub()
          .returns(response);
        response.send = sinon.stub()
          .returns();

        sinon.stub(MoviesService, 'create')
          .resolves(true);
      });

      after(() => {
        MoviesService.create.restore();
      });

      it('é chamado o status com o código 201', async () => {
        await MoviesController.create(request, response);

        expect(response.status.calledWith(201)).to.be.equal(true);
      });

      it('é chamado o send com a mensagem "Movie created with success!"', async () => {
        await MoviesController.create(request, response);

        expect(response.send.calledWith('Movie created with success!')).to.be.equal(true);
      });

    });
  });
  describe('Check a movie by Id', () => {
    describe('When payload is inserted with success', () => {
      const response = {};
      const request = { params: { id: 4 }};

      before(() => {
        request.body = {
          title: 'Example Movie',
          directedBy: 'Jane Dow',
          releaseYear: 1999,
        };

        const getById = {
          code: 200,
          content: {
            id: 4,
            title: 'Example Movie',
            directedBy: 'Jane Dow',
            releaseYear: 1999,
          },
        };

        response.status = sinon.stub()
          .returns(response);
        response.json = sinon.stub()
          .returns();

        sinon.stub(MoviesService, 'getById')
          .resolves(getById);
      });

      after(() => {
        MoviesService.getById.restore();
      });

      it('is called with status 200', async () => {
        await MoviesController.getById(request, response);

        expect(response.status.calledWith(200)).to.be.equal(true);
      });

      it('is called with movie content on json', async () => {
        await MoviesController.getById(request, response);
        correctContent = {
          id: 4,
          title: 'Example Movie',
          directedBy: 'Jane Dow',
          releaseYear: 1999,
        };

        expect(response.json.calledWith(correctContent)).to.be.equal(true);
      });
    });
    describe('When payload is inserted with unknown id', () => {
      const response = {};
      const request = { params: { id: 12 }};

      before(() => {
        request.body = {};

        const getById = {
          code: 404,
          message: 'Movie not found',
        };

        response.status = sinon.stub()
          .returns(response);
        response.json = sinon.stub()
          .returns();

        sinon.stub(MoviesService, 'getById')
          .resolves(getById);
      });

      after(() => {
        MoviesService.getById.restore();
      });

      it('is called with status 404', async () => {
        await MoviesController.getById(request, response);

        expect(response.status.calledWith(404)).to.be.equal(true);
      });

      it('is called with movie content on json', async () => {
        await MoviesController.getById(request, response);

        expect(response.json.calledWith({ message: 'Movie not found'})).to.be.equal(true);
      });
    });
  });
});