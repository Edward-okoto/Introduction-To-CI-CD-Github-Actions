const request = require('supertest');
const app = require('../server'); // Import the Express app (not the server)

describe('GET /', () => {
    it('should return the index.html content', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.text).toContain('<h1>Welcome to My Node.js App!</h1>');
    });
});