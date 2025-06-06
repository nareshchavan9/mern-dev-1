const request = require('supertest');
const app = require('../server');
const User = require('../models/User');

describe('User Service Tests', () => {
  beforeEach(async () => {
    await User.deleteMany({});
  });

  test('user registration with valid data', async () => {
    const userData = {
      fullName: 'Test User',
      email: 'test@example.com',
      voterID: 'VOT123',
      password: 'password123',
      age: 25
    };

    const response = await request(app)
      .post('/api/auth/register')
      .send(userData);

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('message', 'Registration successful');
  });

  test('invalid voter ID format', async () => {
    const userData = {
      fullName: 'Test User',
      email: 'test@example.com',
      voterID: 'invalid',
      password: 'password123',
      age: 25
    };

    const response = await request(app)
      .post('/api/auth/register')
      .send(userData);

    expect(response.statusCode).toBe(400);
  });
});
