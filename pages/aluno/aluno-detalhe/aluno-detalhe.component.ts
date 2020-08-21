import { Aluno } from './../../../models/aluno';
import { AlunoService } from './../../../services/aluno/aluno.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit {

  constructor(private alunoService: AlunoService, private route: ActivatedRoute) {
    
    this.route.params.forEach((v) => {
      if(v.id != undefined) {
        console.log('entrou aqui para buscar o usuario');
        this.aluno = this.alunoService.getAlunoById(v.id);
      }
    });

  }

  aluno: Aluno = new Aluno();

  ngOnInit(): void {

  }

  cadastrar() {

    console.log(this.aluno);

    this.alunoService.postAluno(this.aluno);
  }

}
