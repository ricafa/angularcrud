import { CursosService } from './../../shared/cursos.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.scss']
})
export class CursosFormComponent implements OnInit {
  form: FormGroup;
  submitted: boolean = false;
  constructor(private fb: FormBuilder, private cs: CursosService) { }

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
    console.log('onCancel');
  }

  ngOnInit() {
    this.form = this.fb.group({
      nome: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(10)]]
    });
  }

}
