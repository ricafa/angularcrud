import { browser } from 'protractor';
import { HttpClientModule } from '@angular/common/http';
import { CursosService } from './../../shared/cursos.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Curso } from 'src/model/curso';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.scss']
})
export class CursosFormComponent implements OnInit {
  form: FormGroup;
  submitted: boolean = false;
  curso: Curso = [];
  constructor(private fb: FormBuilder, 
              private cs: CursosService,
              private route: ActivatedRoute) {}

  onSubmit(){
    this.submitted = true;
    console.log(this.form.value);
    if(this.form.valid){
      console.log('submit');
      this.cs.create(this.form.value).subscribe(
        success => console.log('sucesso'),
        error => console.log('error'),
        () => console.log('request completo')
      );
    }
  }

  onCancel(){
    this.submitted = false;
    this.form.reset;
  }

  ngOnInit() {
    this.curso.nome = null;
    if(+this.route.snapshot.paramMap.get('id') >0){
      this.cs.find(+this.route.snapshot.paramMap.get('id'))
             .subscribe(dt => this.curso = dt);
    }
    this.form = this.fb.group({
      nome: [this.curso.nome, [Validators.required, Validators.minLength(4), Validators.maxLength(10)]]
    });
  }

}
