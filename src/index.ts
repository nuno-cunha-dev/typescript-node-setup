import ExampleController from '@controllers/ExampleController';
import express from 'express';

const app = express();

app.get('/', (request, response) => {
  const exampleController = new ExampleController();
  exampleController.exampleAction();
  return response.json({ message: 'Hello World!' });
});

app.listen(3333);
