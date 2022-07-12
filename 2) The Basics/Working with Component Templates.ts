// In servers.component.ts
// we can create inline html by removing url in templateUrl and adding html code in it and renaming 'templateUrl' to 'template'.
template: '<app-server></app-server><app-server></app-server>'  // For wrapping line or for multiline we use this syntax= template: `<app-server></app-server>
                                                                                                                                     <app-server></app-server>`
