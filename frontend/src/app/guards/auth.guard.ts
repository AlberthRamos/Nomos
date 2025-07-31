import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.getToken()) {
    return true; // User is authenticated, allow access
  } else {
    // User is not authenticated, redirect to the login page
    router.navigate(['/login']);
    return false;
  }
};
