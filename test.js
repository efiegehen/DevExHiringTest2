const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./app');
const expect = chai.expect;

chai.use(chaiHttp);

describe('GET /', () => {
  it('should return Hello World!', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res.text).to.equal('Hello World!');
        done();
      });
  });
});

describe('GET /earth', () => {
    it('should return Hello Earth!', (done) => {
      chai.request(app)
        .get('/earth')
        .end((err, res) => {
          expect(res.text).to.equal('Hello Earth!');
          done();
        });
    });
  });