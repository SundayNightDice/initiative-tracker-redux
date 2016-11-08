import express from 'express';

const app = express.Router();

app.get('/test', (req, res) => {
  res.send("I am alive!");
});

module.exports = app;
