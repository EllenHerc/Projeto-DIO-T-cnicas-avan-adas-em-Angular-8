import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MoviesService } from 'src/app/core/movies.service';
import { Movie } from 'src/app/shared/models/movie';


@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent implements OnInit {

  public pagina=0;
  readonly qtdPagina = 6;
  filmes: Movie[] = [];
  texto: string;
  genero: string;

  filtro: FormGroup;
  @Input() generos: string[];
  

  constructor(private serviceFilmes: MoviesService, 
              private fb: FormBuilder) { }
  

  ngOnInit(): void {
    this.generos = ['Ação', 'Romance', 'Aventura', 'Terror', 'Ficção cientifica', 'Comédia', 'Aventura', 'Drama'];
    this.filtro = this.fb.group({
      text: [''],
      genre: ['']
    });

    this.filtro.get('text').valueChanges.subscribe((val: string) => {
      this.texto = val;
      this.resetarConsulta();
    });

    this.filtro.get('genre').valueChanges.subscribe((val: string) => {
      this.genero = val;
      this.resetarConsulta();
    });

    this.listarFilmes();
    
  }

  private resetarConsulta(){
    this.pagina = 0;
    this.filmes = [];
    this.listarFilmes();
  }

  private listarFilmes(): void {
    this.pagina++;
    this.serviceFilmes.listar(this.pagina, this.qtdPagina, this.texto, this.genero)
    .subscribe( (filmes: Movie[]) => this.filmes.push(...filmes));
  }

  onScroll(): void{
    this.listarFilmes();
  }
}
