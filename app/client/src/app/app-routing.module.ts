import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)},
  // { path: '', loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomePageModule)},
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'welcome', loadChildren: './pages/welcome/welcome.module#WelcomePageModule' },
  { path: 'displayimage', loadChildren: './pages/displayimage/displayimage.module#DisplayimagePageModule' },
  { path: 'displaytext', loadChildren: './pages/displaytext/displaytext.module#DisplaytextPageModule' },
  { path: 'success', loadChildren: './pages/success/success.module#SuccessPageModule' },
  { path: 'entityanalysis', loadChildren: './pages/entityanalysis/entityanalysis.module#EntityanalysisPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
