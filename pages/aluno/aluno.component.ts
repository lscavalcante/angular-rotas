import { AlunoService } from './../../services/aluno/aluno.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {


  alunos: any[];
  aluno: any;

  constructor(
    private alunoService: AlunoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.fetchAlunos();
  }


  fetchAlunos() {
    this.alunos = this.alunoService.getAlunos();
  }

  editar(aluno: any) {
    console.log('entrou aqui');
    this.aluno = this.alunoService.getAlunoById(aluno.id);

    this.router.navigate(['/aluno-detalhe', aluno.id]);

    console.log(this.aluno);
  }

  novo() {
    this.router.navigate(['/aluno-detalhe']);
  }

}
