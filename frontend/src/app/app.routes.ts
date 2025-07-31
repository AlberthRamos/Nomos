import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guards/auth.guard';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { AdminProductsComponent } from './pages/admin/products/products.component';

export const routes: Routes = [
  // Authentication route
  { path: 'login', component: LoginComponent },

  // Admin routes (protected by the guard)
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'products', component: AdminProductsComponent },
      // Add other admin routes here
    ]
  },

  // Public routes
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      // The public product catalog will go here, e.g.,
      // { path: '', component: PublicCatalogComponent },
      // { path: ':username', component: UserCatalogComponent }
    ]
  },

  // Fallback route
  { path: '**', redirectTo: '' }
];
