import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'landing', loadChildren: './pages/landing/landing.module#LandingPageModule' },
  { path: 'content-page01', loadChildren: './pages/content-page01/content-page01.module#ContentPage01PageModule' },
  { path: 'content-page02', loadChildren: './pages/content-page02/content-page02.module#ContentPage02PageModule' },
  { path: 'content-page03', loadChildren: './pages/content-page03/content-page03.module#ContentPage03PageModule' },
  { path: 'content-body', loadChildren: './pages/content-body/content-body.module#ContentBodyPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
