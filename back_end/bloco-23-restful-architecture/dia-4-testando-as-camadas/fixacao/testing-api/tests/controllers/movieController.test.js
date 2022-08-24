const sinon = require('sinon');
const { expect } = require('chai');

const MovieService = require('../../services/movieService');
const MoviesController = require('../../controllers/movieController');

describe('Testing movieController layer', () => {
  describe('When calling create controller', () => {
    describe('When payload is not valid', () => {
      const response = {};
      const request = {};

      before(() => {
        request.body = {};

        response.status = sinon.stub().returns(response);
        response.send = sinon.stub().returns();

        sinon.stub(MovieService, 'create').resolves(false);
      });

      after(() => {
        MovieService.create.restore();
      });

      it('status is called with code 400', async () => {
        await MoviesController.create(request, response);

        expect(response.status.calledWith(400)).to.be.equal(true);
      });

      it('send is called with "Invalid Data" message', async () => {
        await MoviesController.create(request, response);

        expect(response.send.calledWith('Invalid Data')).to.be.equal(true);
      });
    });

    describe('when inserted with success', () => {
      const response = {};
      const request = {};

      before(() => {
        request.body = {
          title: 'Example Movie',
          directedBy: 'Jane Dow',
          releaseYear: 1999,
        };

        response.status = sinon.stub().returns(response);
        response.send = sinon.stub().returns();

        sinon.stub(MovieService, 'create').resolves(true);
      });

      after(() => {
        MovieService.create.restore();
      });

      it('status is called with code 201', async () => {
        await MoviesController.create(request, response);

        expect(response.status.calledWith(201)).to.be.equal(true);
      });

      it('send is called with "Movie created with success!" message', async () => {
        await MoviesController.create(request, response);

        expect(
          response.send.calledWith('Movie created with success!')
        ).to.be.equal(true);
      });
    });
  });
});
