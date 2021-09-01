import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-movies',
  templateUrl: './register-movies.component.html',
  styleUrls: ['./register-movies.component.scss']
})
export class RegisterMoviesComponent implements OnInit {

  cadastro: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.cadastro = this.fb.group({
      
    })
  }

}
