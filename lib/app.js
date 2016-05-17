// We need the Component annotation as well as the
// ViewEncapsulation enumeration
import {Component, ViewEncapsulation} from 'angular2/angular2';

// Using the text loader we can import our template
import template from './app.html!text';

// This creates our main application component
@Component({
  // Tells Angular to look for an element <ngc-app> to
  // create this component
  selector: 'ngc-app',
  // Let's use the imported HTML template string
  template,
  // Tell Angular to ignore view encapsulation
  encapsulation: ViewEncapsulation.None
})
export default class App {}
