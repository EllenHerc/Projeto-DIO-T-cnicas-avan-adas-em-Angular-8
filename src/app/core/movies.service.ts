import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Movie } from "../shared/models/movie";


const url = "http://localhost:3000/filmes/";

@Injectable({
    providedIn: 'root'
})
export class MoviesService{

    constructor(private httpClient: HttpClient){ }

    salvar(filme: Movie): Observable<Movie> { 
        return this.httpClient.post<Movie>(url, filme);
      }

    listar(pagina: number, qtdPagina: number): Observable<Movie[]> {
        const httpParms = new HttpParams();
        httpParms.set('_page', pagina.toString()).set('_limit', qtdPagina.toString());
        return this.httpClient.get<Movie[]>(url, {params: httpParms});
    }
    
}