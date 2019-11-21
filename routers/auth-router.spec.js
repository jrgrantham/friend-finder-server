const request = require('supertest');
const server = require('../api/server');
const db = require('../database/dbConfig');

const registerApi = '/api/auth/register';
const loginApi = '/api/auth/login';

const exampleUser = {
  username: 'exampleUser',
  password: 'examplePassword'
};

beforeEach(async () => {
  // jest.resetModules() // this is important - it clears the cache
  // process.env.SECRET = 'thisisasecret'
  await db('users').truncate();
  await request(server)
    .post(registerApi)
    .send(exampleUser);
});

describe('auth-router', () => {

  describe('register endpoint', () => {
    it('should have a body', async () => {
      const response = await request(server)
        .post(registerApi)
        .send({
          username: 'Tony',
          password: '1234'
        })
      // console.log(response.body)
      expect(response.body.username).toEqual('Tony')
    })

    it('should not allow duplicates', async () => {
      const response = await request(server)
        .post(registerApi)
        .send({
          username: 'exampleUser',
          password: 'examplePassword'
        })
        // console.log(response.res.text);
        expect(response.res.text).toContain('SQLITE_CONSTRAINT')
    })
  })

  describe('login endpoint', () => {
    it('should return a token', async () => {
      const loginResponse = await request(server)
        .post(loginApi)
        .send(exampleUser);
      // console.log(loginResponse.body)
      expect(loginResponse.body).toHaveProperty('token');
      expect(loginResponse.status).toBe(200);
    });
  });
  
  describe('login endpoint', () => {
    it("shouldn't return a token", async () => {
      const loginResponse = await request(server)
        .post(loginApi)
        .send({
          username: 'does not exist',
          password: 'incorrect'
        });
      // console.log(loginResponse.status)
      // let token = loginResponse.body.token
      expect(loginResponse.status).toBe(401);
    });
  });
});
