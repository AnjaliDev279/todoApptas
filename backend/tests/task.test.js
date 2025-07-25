const request = require('supertest');
const app = require('../app');
const db = require('../db');
describe('Task API - Integration Tests', () => {
afterAll(async () => {
await db.end();
});


it('should create a new task', async () => {
const res = await request(app).post('/api/tasks').send({
title: 'Sample Task',
description: 'This is a test task'
});


expect(res.statusCode).toBe(200);
expect(res.body).toHaveProperty('id');
expect(res.body.title).toBe('Sample Task');
});


it('should return a list of 5 or fewer uncompleted tasks', async () => {
const res = await request(app).get('/api/tasks');
expect(res.statusCode).toBe(200);
expect(Array.isArray(res.body)).toBe(true);
expect(res.body.length).toBeLessThanOrEqual(5);
});


it('should mark a task as completed', async () => {
const create = await request(app).post('/api/tasks').send({
title: 'To be completed',
description: ''
});
expect(create.statusCode).toBe(200);
expect(create.body).toHaveProperty('id');
const taskId = create.body.id;

const res = await request(app).put(`/api/tasks/${taskId}/done`);
expect(res.statusCode).toBe(204);
});


it('should return 400 or 500 if title is missing', async () => {
const res = await request(app).post('/api/tasks').send({
description: 'Missing title'
});

expect([400, 500]).toContain(res.statusCode);
});
});