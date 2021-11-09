import { Request, Response } from 'express';

export default class ExampleController {
  exampleAction(request: Request, response: Response) {
    response.json({
      message: 'Nice setup!',
    });
  }
}
