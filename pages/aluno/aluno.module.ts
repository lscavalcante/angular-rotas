import { AlunoComponent } from './aluno.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AlunoRoutingModule } from './aluno.routing.module';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';

@NgModule({
  declarations: [
    AlunoComponent,
    AlunoDetalheComponent
  ],
  imports: [
    CommonModule,
    AlunoRoutingModule,
    FormsModule,
  ]
})
export class AlunoModule { }
