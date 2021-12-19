import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth/auth.guard';
import { PublicComponent } from '../core/layout-components/view/public';
import { SecureComponent } from '../core/layout-components/view/secure';

const routes: Routes = [
  {
    path: 'auth',
    component: PublicComponent,
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    data: { title: 'Auth' }
  },

  // secure route end start
  {
    path: 'dashboard',
    component: SecureComponent,
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    data: {title: 'Dashboard'},
    canActivate: [AuthGuard]
  },
  // secure route end area
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
