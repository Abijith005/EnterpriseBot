import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'auth' },

  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((module) => module.AuthModule),
  },

  {
    path: 'user',
    loadChildren: () =>
      import('./modules/user/user.module').then((module) => module.UserModule),
  },

  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/admin/admin.module').then(
        (module) => module.AdminModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
