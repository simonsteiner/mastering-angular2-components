# Mastering Angular 2 Components
My personal code repo for the project of the eBook: ["Mastering Angular 2 Components"](https://www.packtpub.com/web-development/mastering-angular-2-components) from [Gion Kunz](https://github.com/gionkunz), ([his repo](https://github.com/gionkunz/angular-2-components))

# Coding Steps

## Preerequisit
 - [nodejs inkl. npm](https://nodejs.org), [Node Version Manager is recommended on Unix-like systems](https://github.com/creationix/nvm)
 - `npm install -g jspm live-server`
 
## Chapter 1: Getting started
 - inside working dir `npm install jspm --save-dev` and `jspm init`
 - answer all questions from JSPM wizard with `[Enter]` and the question about transpiler with `[TypScript]`
 - create index.html
```html
<!doctype html>
<script src="jspm_packages/system.js"></script>
<script src="config.js"></script>
<script>
 System.import('main.js');
</script>
```
 - `jspm install jquery`
 - create main.js
```javascript
import $ from 'jquery';
class HelloWorld {
 constructor() {
   $(document.body).append('<h1>Hello World!</h1>');
 }
}
const helloWorld = new HelloWorld();
```
 - start application with `live-server`

# Further reading
## Chapter 1
 * SOLID principles: [Wiki](https://en.wikipedia.org/wiki/SOLID_(object-oriented_design)), [Principles of OOD](http://butunclebob.com/ArticleS.UncleBob.PrinciplesOfOod), [Getting a SOLID start](https://sites.google.com/site/unclebobconsultingllc/getting-a-solid-start), [Agile Software Development, Principles, Patterns, and Practices by Robert C. Martin](http://www.amazon.com/Software-Development-Principles-Patterns-Practices/dp/0135974445/)
 * Premature optimization is the root of all evil -- DonaldKnuth [Wiki](https://en.wikipedia.org/wiki/Program_optimization#When_to_optimize), [c2 wiki](http://c2.com/cgi/wiki?PrematureOptimization)
 * ECMAScript 6 [Exploring ES6 by Dr. Axel Rauschmayer](http://exploringjs.com/), [Speaking JavaScript by Dr. Axel Rauschmayer](http://speakingjs.com/), #RSConf. Dr. Axel Rauschmayer. Using ECMAScript 6 today. [Part I](https://youtu.be/Fg3bEZIcnUw), [Part II](https://youtu.be/Vhhq1WpzsnM), [Link Collection](http://java.ociweb.com/mark/programming/JavaScript/ES6.html)
 * [JavaScript Design Patterns by Addy Osmani](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)
 * Mozilla Developer Network [export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export), [import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import), [Template literals (strings enclosed with back-tick (``` ```))](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
 * Design Patters by Erich Gamma (Gang of four [GoF]), [Wiki](https://en.wikipedia.org/wiki/Design_Patterns), [PDF](http://www.uml.org.cn/c++/pdf/DesignPatterns.pdf), [c2 wiki](http://c2.com/cgi/wiki?GangOfFour)

## Chapter 2
 * zones.js: [Brian Ford - Zones - NG-Conf 2014](https://youtu.be/3IqtmUscE_U), [GitHub](https://github.com/angular/zone.js)
 