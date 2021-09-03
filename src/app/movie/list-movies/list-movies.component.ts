import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MoviesService } from 'src/app/core/movies.service';
import { Movie } from 'src/app/shared/models/movie';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent implements OnInit {

  readonly qtdPagina = 4;
  pagina = 0;
  filtro: FormGroup;
  filmes: Movie[] = [];

  constructor(private serviceFilmes: MoviesService, public fb: FormBuilder) { }
  

  ngOnInit(): void {
    this.listarFilmes();
  }

  private listarFilmes(): void {
    this.pagina++;

    this.serviceFilmes.listar(this.pagina, this.qtdPagina)
    .subscribe( (filmes: Movie[]) => this.filmes.push(...filmes));
  }

  onScroll(): void{

  }
}
