import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-products',
  standalone: true,
  imports: [CommonModule],
  template: `<h1 class="text-3xl font-bold text-white">Gerenciar Produtos</h1><p class="text-gray-400 mt-2">Aqui você poderá adicionar, editar e remover seus produtos.</p>`,
})
export class AdminProductsComponent {}
