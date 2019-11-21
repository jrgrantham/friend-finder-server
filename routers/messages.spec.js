const request = require('supertest');
const server = require('../api/server');
const db = require('../database/dbConfig');

const registerApi = '/api/auth/register';
const loginApi = '/api/auth/login';
const messageApi = '/api/users/1/messages';

const exampleUser = {
  username: 'exampleUser',
  password: 'examplePassword'
};

const exampleUser2 = {
  username: 'exampleUser2',
  password: 'examplePassword2'
};

const testMessage = {
  message: 'hello there',
  recipient: 2
};


beforeEach(async () => {
  // jest.resetModules(); // this is important - it clears the cache
  // process.env.SECRET = 'thisisasecret';
  await db('users').truncate();

});

describe('messages', () => {
  describe('received', () => {
    it('should display them', async () => {
      await request(server)
      .post(registerApi)
      .send(exampleUser);
    // await request(server)
    //   .post(registerApi)
    //   .send(exampleUser2);
      const login = await request(server)
        .post(loginApi)
        .send(exampleUser);
      // console.log(login.body.token);
      const token = login.body.token
      await request(server)
        .post(messageApi)
        .set({ Authorization: token })
        .send(testMessage);
      // const response = await request(server).get(messageApi);
      // console.log(response.body);
      // console.log(result);

      // expect(response.body.username).toEqual('Tony');
    });

  //   it('should not allow duplicates', async () => {
  //     const response = await request(server)
  //       .post(registerApi)
  //       .send({
  //         username: 'exampleUser',
  //         password: 'examplePassword'
  //       });
  //     // console.log(response.res.text);
  //     expect(response.res.text).toContain('SQLITE_CONSTRAINT');
  //   });
  // });

  // describe('login endpoint', () => {
  //   it('should return a token', async () => {
  //     const loginResponse = await request(server)
  //       .post(loginApi)
  //       .send(exampleUser);
  //     // console.log(loginResponse.body);
  //     expect(loginResponse.body).toHaveProperty('token');
  //     expect(loginResponse.status).toBe(200);
  //   });
  // });

  // describe('login endpoint', () => {
  //   it("shouldn't return a token", async () => {
  //     const loginResponse = await request(server)
  //       .post(loginApi)
  //       .send({
  //         username: 'does not exist',
  //         password: 'incorrect'
  //       });
  //     // console.log(loginResponse.status)
  //     // let token = loginResponse.body.token
  //     expect(loginResponse.status).toBe(401);
  //   });
  });
});
