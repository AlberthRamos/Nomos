import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `<h1 class="text-3xl font-bold text-white">Dashboard</h1><p class="text-gray-400 mt-2">Bem-vindo ao painel do Nomos!</p>`,
})
export class DashboardComponent {}
