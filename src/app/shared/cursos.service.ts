import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso } from './../../model/curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  API = 'http://localhost:3000/cursos';

  constructor(private http : HttpClient) {}

  getCursos(){
    return this.http.get<Curso[]>(this.API);
  }

  create(curso){
    return this.http.post(this.API, curso).pipe();
  }

}
