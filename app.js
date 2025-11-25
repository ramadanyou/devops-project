// app.js - Application Node.js simple
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware pour parser le JSON
app.use(express.json());

// Route de base
app.get('/', (req, res) => {
  res.json({ 
    message: 'Bienvenue sur mon API DevOps !',
    version: '1.0.0',
    status: 'running'
  });
});

// Route pour vérifier la santé de l'app
app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy',
    timestamp: new Date().toISOString()
  });
});

// Route pour obtenir des informations
app.get('/api/info', (req, res) => {
  res.json({
    project: 'DevOps Demo',
    author: 'ramadan',
    description: 'API simple avec CI/CD Pipeline'
  });
});

// Route pour une liste simple
app.get('/api/tasks', (req, res) => {
  res.json({
    tasks: [
      { id: 1, title: 'Apprendre Docker', done: true },
      { id: 2, title: 'Configurer CI/CD', done: true },
      { id: 3, title: 'Déployer en prod', done: false }
    ]
  });
});

// Démarrer le serveur seulement si ce fichier est exécuté directement
if (require.main === module) {
  app.listen(port, () => {
    console.log(`✅ Serveur lancé sur le port ${port}`);
  });
}

// Exporter pour les tests
module.exports = app;
