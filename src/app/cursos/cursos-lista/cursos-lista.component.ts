import { Curso } from './../../../model/curso';
import { Component, OnInit } from '@angular/core';
import { CursosService } from './../../shared/cursos.service';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss']
})
export class CursosListaComponent implements OnInit {
  cursos: Curso[];

  constructor(private cs:CursosService) {}

  ngOnInit() {
    this.cs.getCursos().subscribe(dt => this.cursos = dt);
  }

}
