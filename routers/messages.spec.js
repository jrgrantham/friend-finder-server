const request = require('supertest');
const server = require('../api/server');
const db = require('../database/dbConfig');

const loginApi = '/api/auth/login';
const messageApi = '/api/users/messages';

const james = {
  username: 'James',
  password: '1234'
};

const testMessage = {
  message: 'James say hello there to Megan',
  recipient: 2
};


describe('messages', () => {
  
  beforeAll(() => {
    return db.seed.run()
  })

  describe('received', () => {
    it('', async () => {
      const login = await request(server)
        .post(loginApi)
        .send(james);
      const token = login.body.token;
      console.log(token);
      const response = await request(server)
        .post(messageApi)
        .set({ Authorization: token })
        .send(testMessage);
      console.log(response.body);
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
