import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  // rota lazy loading
  { 
    path: 'aluno',
    loadChildren: () => import('./pages/aluno/aluno.module').then(m => m.AlunoModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
