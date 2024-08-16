const request = require('supertest');
const express = require('express');
const app = express();

app.get('/api/greet', (req, res) => {
  res.json({
    message: "Hello this my sample Node.js API!",
    about: "This application is designed to demonstrate a basic integration between Node.js and a front-end HTML page.\nIt is also used to build a CI/CD pipeline using Azure DevOps to automate the deployment of Dockerized applications."
  });
});

describe('GET /api/greet', () => {
  it('should return a greeting message and about information', async () => {
    const res = await request(app).get('/api/greet');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Hello this my sample Node.js API!');
    expect(res.body).toHaveProperty('about', 'This application is designed to demonstrate a basic integration between Node.js and a front-end HTML page.\nIt is also used to build a CI/CD pipeline using Azure DevOps to automate the deployment of Dockerized applications.');
  });
});
