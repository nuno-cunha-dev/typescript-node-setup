import ExampleController from '@controllers/ExampleController';
import express from 'express';

const app = express();
const exampleController = new ExampleController();

app.get('/', exampleController.exampleAction);

app.listen(3333);
