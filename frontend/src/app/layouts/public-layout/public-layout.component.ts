import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-public-layout',
  standalone: true,
  imports: [RouterModule],
  template: '<router-outlet></router-outlet>', // Just a passthrough for public routes
})
export class PublicLayoutComponent {}
