// In app.component.html
<div class="container">
  <div class="row">
    <div class="col-xs-12">
      <ol>
        <li>Create two new Components (manually or with CLI): WarningAlert and SuccessAlert</li>
        <li>Output them beneath each other in the AppComponent</li>
        <li>Output a warning or success message in the Components</li>
        <li>Style the Components appropriately (maybe some red/ green text?)</li>
      </ol>
      <p>Use external or internal templates and styles!</p>
      <p>Feel free to create more components, nest the into each other or play around with
      different types of selectors!</p>
      <hr />
      <app-warning-alert></app-warning-alert>
      <app-sucess-alert></app-sucess-alert>
    </div>
  </div>
</div>



// In warning-alert.component.ts
import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `
<p>This is warning you are in danger!</p>
`,
  styles: [                                                   // writing inline css.
    `
p{
padding:20px;
background-color:mistyrose;
border:1px solid red;
}
`  ]
})

export class WarningAlertComponent {

}



// In sucess-alert-component.html
<p>You are so successful!</p>


// In app.module.ts add 'WarningAlertComponent' in declarations, because warning-alert is created manually, so it is not automatically added as cli created files.
import { WarningAlertComponent } from './warning-alert/warning-alert.component';  // import this manually.


// In sucess-alert.component.css
p {   // To link css file using external file.
  padding: 20px;    // padding is the space between text and border
  background-color: palegreen;
  border: 1px solid green;
}
