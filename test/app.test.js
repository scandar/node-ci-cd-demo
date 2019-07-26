import chai from 'chai';
import chaiHttp from 'chai-http';
import app, { capitalize } from '../src/app';

chai.should();
chai.use(chaiHttp);

describe('/GET hello', () => {
  let response;
  beforeEach((done) => {
    response = undefined;

    chai.request(app)
      .get('/hello')
      .end((err, res) => {
        response = res.body;
        done();
      });
  });

  it('returns a message of type string', () => {
    response.message.should.be.a('string');
  });
  it('message is Hello World!', () => {
    response.message.should.equal('Hello World!');
  });
});

describe('/GET hello with query params', () => {
  const name = 'foo';
  let response;
  beforeEach((done) => {
    response = undefined;

    chai.request(app)
      .get(`/hello?name=${name}`)
      .end((err, res) => {
        response = res.body;
        done();
      });
  });

  it('message has a capitalized name from query params', () => {
    response.message.should.equal(`Hello ${capitalize(name)}!`);
  });
});
