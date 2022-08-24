const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../models/connection');
const MoviesModel = require('../../models/movieModel');

describe('Testing Model Layer', () => {
  describe('Insere um novo filme no BD', () => {
    const payloadMovie = {
      title: 'Example Movie',
      directed_by: 'Jane Dow',
      release_year: 1999,
    };

    before(async () => {
      const execute = [{ insertId: 1 }];

      sinon.stub(connection, 'execute').resolves(execute);
    });

    after(async () => {
      connection.execute.restore();
    });

    describe('quando é inserido com sucesso', async () => {

      it('retorna um objeto', async () => {
        const response = await MoviesModel.create(payloadMovie);

        expect(response).to.be.a('object');
      });

      it('tal objeto possui o "id" do novo filme inserido', async () => {
        const response = await MoviesModel.create(payloadMovie);

        expect(response).to.have.a.property('id');
      });

    });
  });

  describe('Check a movie by Id', () => {
    const id = 1;
    describe('When a movie is found', () => {
      before(async () => {
        const execute = [{
          id,
          title: 'Up',
          directed_by: 'Jason Momoa',
          release_year: 2012,
        }];
    
        sinon.stub(connection, 'execute').resolves(execute);
      });
    
      after(async () => {
        connection.execute.restore();
      });

      it('returns an object', async () => {
        const response = await MoviesModel.getById(id);

        expect(response).to.be.an('object');
      });

      it('has correct movie properties', async () => {
        const response = await MoviesModel.getById(id);

        expect(response).to.have.a.property('id');
        expect(response.id).to.be.equal(1);

        expect(response).to.have.a.property('title');
        expect(response.title).to.be.equal('Up');

        expect(response).to.have.a.property('directed_by');
        expect(response.directed_by).to.be.equal('Jason Momoa');

        expect(response).to.have.a.property('release_year');
        expect(response.release_year).to.be.equal(2012);
      });
    });
    describe('When a movie is not found', () => {
      before(async () => {
        const execute = [];
    
        sinon.stub(connection, 'execute').resolves(execute);
      });
      
      after(async () => {
        connection.execute.restore();
      });
      
      it('returns "null"', async () => {
        const response = await MoviesModel.getById(id);
        
        expect(response).to.be.equal(null);
      });
    });
  });
});