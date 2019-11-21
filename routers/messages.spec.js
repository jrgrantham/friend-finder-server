const request = require('supertest');
const server = require('../api/server');
const db = require('../database/dbConfig');

const loginApi = '/api/auth/login';
const messageApi = '/api/users/messages';
const sentMessagesApi = '/api/users/messages/sent'

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
    return db.seed.run();
  });

  describe('Messages', () => {
    it('should display received messages', async () => {
      const login = await request(server)
        .post(loginApi)
        .send(james);
      const token = login.body.token;
      const response = await request(server)
        .get(messageApi)
        .set({ Authorization: token });
      // console.log(response.body);
      expect(response.body.length).toEqual(4);
    });

    it('should display sent messages', async () => {
      const login = await request(server)
        .post(loginApi)
        .send(james);
      const token = login.body.token;
      const response = await request(server)
        .get(sentMessagesApi)
        .set({ Authorization: token });
      // console.log(response.body);
      expect(response.body.length).toEqual(5);
    });

    it('should send a message', async () => {
      const login = await request(server)
        .post(loginApi)
        .send(james);
      const token = login.body.token;
      // console.log(token);
      const response = await request(server)
        .post(messageApi)
        .set({ Authorization: token })
        .send(testMessage);
      // console.log(response.body.length);
      expect(response.body.length).toEqual(6);
    });
  });
});
