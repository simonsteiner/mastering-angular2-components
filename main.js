import $ from 'jquery';
class HelloWorld {
  constructor() {
    $(document.body).append('<h1>Hello World!</h1>');
  }
}
const helloWorld = new HelloWorld();