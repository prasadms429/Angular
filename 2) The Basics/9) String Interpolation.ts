// Data binding is the communication between typscript file (business logic) and template file (html file, that user interacts with). Data binding is dynamic declaration.

// In server.component.ts
export class ServerComponent {
  serverId:number = 10;       // For declaring variable and assigning value
  serverStatus: string = "offline";

  getServerStatus() {     // Method creation
    return this.serverStatus;
  }
}


// In server.component.html
<p>The {{'Server'}} with ID {{serverId}} is {{getServerStatus()}}</p>     // '{{ }}' this is string interpolation syntax. The o/p of this code is "The Server with ID 10 is offline".
//{{'Server'}} this syntax is for displaying string as written inside curly braces.


// In app.component.html
<div class="container">
  <div class="row">
    <div class="col-xs-12">
      <p>I'm in the app component!</p>
      <hr />
      <app-server></app-server>   // we should declare this to display the output of server component.
    </div>
  </div>
</div>
