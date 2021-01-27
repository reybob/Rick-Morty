import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CharactersComponent } from './components/characters/characters.component';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  { path: 'home', component: HomeComponent,
      loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
  },
  // { path: 'characters', component: CharactersComponent,
  //     loadChildren: () => import('./components/characters/chracters.module').then(m => m.CharactersModule)
  // },
  {
    path: 'characters',
    component: CharactersComponent
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
