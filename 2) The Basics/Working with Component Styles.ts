// In app.component.html
<div class="container">
  <div class="row">
    <div class="col-xs-12">     // To give space in starting of text and ending of text, we use this 'div' and 'col-xs-12' (column spce)
      <h1>I'm in app component</h1>
      <hr>
      <app-servers></app-servers>
    </div>
  </div>
</div>
  
  
// In app.component.css
  h1{     // For external css linking
    color:darkblue;
}

  
// In app.component.ts
  styles: [`          // This is for writing inline css and by using `` this symbol, we can write multiline code.
    h1{
        color:dodgerblue;     
      }`
  ]
