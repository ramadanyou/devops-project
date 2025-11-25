// Les Tests 
const request = require('supertest');
const app = require('./app');

describe('Tests de l\'API', () => {
  
  // Test 1 : Route principale
  test('GET / devrait retourner un message de bienvenue', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Bienvenue sur mon API DevOps !');
    expect(response.body.status).toBe('running');
  });

  // Test 2 : Route health
  test('GET /health devrait retourner le status healthy', async () => {
    const response = await request(app).get('/health');
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('healthy');
    expect(response.body.timestamp).toBeDefined();
  });

  // Test 3 : Route info
  test('GET /api/info devrait retourner les informations du projet', async () => {
    const response = await request(app).get('/api/info');
    expect(response.statusCode).toBe(200);
    expect(response.body.project).toBe('DevOps Demo');
  });

  // Test 4 : Route tasks
  test('GET /api/tasks devrait retourner une liste de tâches', async () => {
    const response = await request(app).get('/api/tasks');
    expect(response.statusCode).toBe(200);
    expect(response.body.tasks).toHaveLength(3);
    expect(response.body.tasks[0].title).toBe('Apprendre Docker');
  });

  // Test 5 : Route inexistante
  test('GET /route-inexistante devrait retourner 404', async () => {
    const response = await request(app).get('/route-inexistante');
    expect(response.statusCode).toBe(404);
  });
});
