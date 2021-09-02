import { HttpClient } from "@angular/common/http";
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

    
}