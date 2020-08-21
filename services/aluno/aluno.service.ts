import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {


  alunos: any[] = [
    { id: 1, nome: 'Lucas', email: 'lucas@gmail.com' },
    { id: 2, nome: 'Lucas1', email: 'lucas@gmail.com' },
    { id: 3, nome: 'Lucas2', email: 'lucas@gmail.com' },
    { id: 4, nome: 'Lucas3', email: 'lucas@gmail.com' },
    { id: 5, nome: 'Lucas4', email: 'lucas@gmail.com' },
    { id: 6, nome: 'Lucas5', email: 'lucas@gmail.com' },
  ];


  constructor() { }


  getAlunos() {
    return this.alunos;
  }

  getAlunoById(id: number) {
    return this.alunos.find((v) => v.id == id);
  }

  postAluno(aluno: any) {
    this.alunos.push(aluno);

    console.log(this.alunos.length);
  }

}
