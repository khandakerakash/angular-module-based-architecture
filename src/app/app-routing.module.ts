import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './core/layout-components/view/public';

const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  {
    path: 'auth',
    component: PublicComponent,
    loadChildren: () => import('./feature/auth/auth.module').then(m => m.AuthModule),
    data: { title: 'Auth' }
  },
  {
    path: '',
    loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule)
  },
  { path: '**', redirectTo: 'auth/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
