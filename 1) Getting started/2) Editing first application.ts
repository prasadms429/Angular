// In app.component.html
<input type="text" [(ngModel)]="name">    // 'ngModel' is built in framework to change the below title as same as input changes.
<p>{{ name }}</p>   // paragraph


// In app.component.ts    (ts is the typeScript built using javascript)
name = 'Max';       // In this file we change 'title' to 'name' by renaming it and assign value by changing from 'my-first-app' to 'Max'.


// In app.module.ts
import { FormsModule } from '@angular/forms';   // The angular doesnt know about 'ngModel', so we import this.

imports: [
    BrowserModule,
    FormsModule       // After importing 'FormsModule', we include it in it.
  ],
