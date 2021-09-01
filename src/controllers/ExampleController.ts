import ExampleService from '@services/ExampleService';

export default class ExampleController {
  exampleAction() {
    const exampleService = new ExampleService();
    console.log(exampleService.getExampleValue());
  }
}
