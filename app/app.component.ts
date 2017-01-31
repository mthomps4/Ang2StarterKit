import {Component} from "@angular/core";

@Component({
  selector: "my-app",
  template: `
    <div class="jumbotron">
     <h1>Welcome to Our APP!</h1>
    </div>
  `,
  styles: [`
      .jumbotron { box-shadow: 0 2px 0 rgba(0,0,0.4, 0.4);}
    `]
})
export class AppComponent {}
