// In servers.component.ts
selector:'app-servers',       
//selector: '[app-servers]',    // This is for selecting attributes
//selector:'.app-servers',    // This is for selecting class.


// In app.component.html
<app-servers></app-servers>
<!--<div app-servers></div>-->          // If we select selector as attribute, then we should write this in app.component.html
<!--<div class="app-servers"></div>-->  // If we select selector as class, then we should write this in app.component.html
  
