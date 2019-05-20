import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso } from './../../model/curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(private http : HttpClient) {}

  getCursos(){
    return this.http.get<Curso[]>('http://localhost:3000/cursos');
  }

}
