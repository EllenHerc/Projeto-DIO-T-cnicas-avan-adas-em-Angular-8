import { JsonpClientBackend } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-movies',
  templateUrl: './register-movies.component.html',
  styleUrls: ['./register-movies.component.scss']
})
export class RegisterMoviesComponent implements OnInit {

  cadastro: FormGroup;
  @Input() generos: Array<string>;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.generos = ['Ação', 'Romance', 'Aventura', 'Terror', 'Ficção cientifica', 'Comédia', 'Aventura', 'Drama'];

    this.cadastro = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(256)]],
      urlFoto: ['', [Validators.minLength(10)]],
      lancamento: ['', Validators.required],
      descricao: [''],
      notaIMDb: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
      linkIMDb: ['', [Validators.minLength(10)]],
      genero: ['', [Validators.required]]
    })
  }

  resetForm(): void {
    this.cadastro.reset();
  }

  submit(): void{
    if(this.cadastro.invalid)
      return ;
    
      alert('show! \n\n' + JSON.stringify(this.cadastro.value, null, 4));
  }

}
