import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/core/movies.service';
import { AlertComponent } from 'src/app/shared/components/alert/alert.component';
import { Alert } from 'src/app/shared/models/alert';
import { Movie } from 'src/app/shared/models/movie';

@Component({
  selector: 'app-register-movies',
  templateUrl: './register-movies.component.html',
  styleUrls: ['./register-movies.component.scss']
})
export class RegisterMoviesComponent implements OnInit {

  cadastro: FormGroup;
  @Input() generos: Array<string>;

  constructor(public dialog: MatDialog, 
              private fb: FormBuilder, 
              private filmesService: MoviesService,
              private router: Router) { }

  ngOnInit(): void {

    this.generos = ['Ação', 'Romance', 'Aventura', 'Terror', 'Ficção cientifica', 'Comédia', 'Aventura', 'Drama'];

    this.cadastro = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(256)]],
      urlImg: ['', [Validators.minLength(10)]],
      releaseDate: ['', Validators.required],
      description: [''],
      IMDbRating: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
      urlIMDb: ['', [Validators.minLength(10)]],
      genre: ['', [Validators.required]]
    })
  }

  resetForm(): void {
    this.cadastro.reset();
  }

  submit(): void{
    this.cadastro.markAllAsTouched();
    if(this.cadastro.invalid)
      return ;
    
      const filme = this.cadastro.getRawValue() as Movie;
      this.salvarFilme(filme);
  }

  private salvarFilme(filme: Movie): void{
    if(filme.urlImg == ''){
      filme.urlImg = '../../assets/images/filme.PNG';
    }
    this.filmesService.salvar(filme).subscribe( () => {
      const config = {
        data: {
          btnSucess: 'Ir para Listagem',
          btnCancel: 'Adicionar Novo Filme',
          colorBtnCancel: 'accent',
          btnClose: true
        } as Alert 
      };
      const dialogRef = this.dialog.open(AlertComponent, config);
      dialogRef.afterClosed().subscribe( (opcao: boolean) => {
        if(opcao){
          this.router.navigateByUrl('filmes');
        }else {
          this.resetForm();
        }
      })
    },
      () => {
        const config = {
          data: {
            title: 'Erro ao salvar o filme',
            description: 'Houve um erro ao salvar o filme, por favor tente novamente mais tarde.',
            btnSucess: 'Fechar',
            colorBtnSucess: 'warn',
            btnClose: false
          } as Alert 
        };
        this.dialog.open(AlertComponent, config);
      });
    }

}
