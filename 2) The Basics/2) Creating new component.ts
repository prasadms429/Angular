// Create Folder called 'server' inside 'app' folder and create file inside the server folder called 'server.component.ts' in that add this code.
import { Component } from '@angular/core';  // Angular doesnt know about 'Component'. So, we should import it.

@Component({    // To add some functionality
  selector: 'app-server',
  templateUrl:'./server.component.html'  // we create one separate file inside 'server' called 'server.component.html' and write code inside it and link it to this file, using this code.
})

export class ServerComponent {    // To export the class to 'index.html' to display in web page

}
