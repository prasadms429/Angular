// In 'app.module.ts'
import { ServerComponent } from './server/server.component';    // we should import it, because Angular somewhat knows about 'server' component but this type script file doesnt knows about it. So we have to include it.

declarations: [
    AppComponent,
    ServerComponent     // we should include ServerComponent in app.module.ts to bundle all components in module file to use as package.
  ]
