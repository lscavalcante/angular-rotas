import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoComponent } from './aluno.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: AlunoComponent, 
    children: 
    [
      {path: 'aluno-detalhe', component: AlunoDetalheComponent},
      {path: 'aluno-detalhe/:id', component: AlunoDetalheComponent}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunoRoutingModule { }
