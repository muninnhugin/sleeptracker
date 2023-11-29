import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'sleepiness',
    loadChildren: () => import('./pages/sleepiness/sleepiness.module').then(m => m.SleepinessPageModule)
  },
  {
    path: 'log',
    loadChildren: () => import('./pages/log/log.module').then(m => m.LogPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
