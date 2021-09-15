import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
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

  id: number;
  cadastro: FormGroup;
  @Input() generos: Array<string>;

  constructor(public dialog: MatDialog, 
              private fb: FormBuilder, 
              private filmesService: MoviesService,
              private router: Router,
              private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.activeRouter.snapshot.params['id'];
    if(this.id){
      this.filmesService.visualizar(this.id)
      .subscribe((filme: Movie) => this.criarFormulario(filme));
    }
    else {
      this.criarFormulario(this.criarFormularioEmBranco());
    }

    this.generos = ['Ação', 'Romance', 'Aventura', 'Terror', 'Ficção cientifica', 'Comédia', 'Aventura', 'Drama'];

    
  }

  resetForm(): void {
    console.log(this.id);
    if(this.id){
      this.router.navigateByUrl('filmes');
    }
    else{
      this.cadastro.reset();
    }
    
  }

  submit(): void{
    this.cadastro.markAllAsTouched();
    if(this.cadastro.invalid)
      return ;
    
      const filme = this.cadastro.getRawValue() as Movie;
      if(this.id){
        filme.id = this.id;
        this.editarFilme(filme);

      } else {
        this.salvarFilme(filme);
      }
      
  }

  private criarFormulario(filme: Movie): void{
    this.cadastro = this.fb.group({
      title: [filme.title, [Validators.required, Validators.minLength(2), Validators.maxLength(256)]],
      urlImg: [filme.urlImg, [Validators.minLength(10)]],
      releaseDate: [filme.releaseDate, Validators.required],
      description: [filme.description],
      IMDbRating: [filme.IMDbRating, [Validators.required, Validators.min(0), Validators.max(10)]],
      urlIMDb: [filme.urlIMDb, [Validators.minLength(10)]],
      genre: [filme.genre, [Validators.required]]
    })
  }

  private criarFormularioEmBranco(): Movie{
    return {
      title: null,
      urlImg: null,
      releaseDate: null,
      description: null,
      IMDbRating: null,
      urlIMDb: null,
      genre: null
    } as Movie;
  }

  private salvarFilme(filme: Movie): void{
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

    private  editarFilme(filme: Movie): void{
      this.filmesService.editar(filme).subscribe( () => {
        const config = {
          data: {
            description: 'Registro atualizado com sucesso!',
            btnSucess: 'Ir para Listagem',
            colorBtnCancel: 'accent',
          } as Alert 
        };
        const dialogRef = this.dialog.open(AlertComponent, config);
        dialogRef.afterClosed().subscribe( () => this.router.navigateByUrl('filmes'))
      },
        () => {
          const config = {
            data: {
              title: 'Erro ao editar o filme',
              description: 'Houve um erro ao editar o filme, por favor tente novamente mais tarde.',
              btnSucess: 'Fechar',
              colorBtnSucess: 'warn',
              btnClose: false
            } as Alert 
          };
          this.dialog.open(AlertComponent, config);
        });
      }

}
