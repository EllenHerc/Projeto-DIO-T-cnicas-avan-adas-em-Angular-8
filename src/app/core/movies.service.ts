import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { __param } from "tslib";
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

    listar(pagina: number, qtdPagina: number, texto?: string, genero?: string): Observable<Movie[]> {

        if(texto && genero){
            return this.httpClient.get<Movie[]>(url, {params: { ['_page']: pagina.toString(), 
                                                                ['_limit']: qtdPagina.toString(),                                                           
                                                                ['q']: texto,
                                                                ['genre']: genero } } );
        }

        else if(texto){
            return this.httpClient.get<Movie[]>(url, {params: { ['_page']: pagina.toString(), 
                                                                ['_limit']: qtdPagina.toString(),                                                           
                                                                ['q']: texto } } );
        }
        else if(genero){
            return this.httpClient.get<Movie[]>(url, {params: { ['_page']: pagina.toString(), 
                                                                ['_limit']: qtdPagina.toString(),                                                                                                                   
                                                                ['genre']: genero } } );
        }
        else{
            return this.httpClient.get<Movie[]>(url, {params: { ['_page']: pagina.toString(), 
                                                                ['_limit']: qtdPagina.toString()} } );
        }
        
    }
    
}