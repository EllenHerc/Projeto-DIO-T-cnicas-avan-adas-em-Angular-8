import { HttpClient } from "@angular/common/http";
import { identifierModuleUrl } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ConfigParams } from "../shared/models/config-params";
import { Movie } from "../shared/models/movie";
import { ConfigParamsService } from "./config-params.service";


const url = "http://localhost:3000/filmes/";

@Injectable({
    providedIn: 'root'
})
export class MoviesService{

    constructor(private httpClient: HttpClient) { }

    salvar(filme: Movie): Observable<Movie> { 
        return this.httpClient.post<Movie>(url, filme);
    }

    editar(filme: Movie): Observable<Movie> {
        return this.httpClient.put<Movie>(url + filme.id, filme);
    }

    listar(config: ConfigParams): Observable<Movie[]> {

        let configP = new ConfigParamsService();
        return this.httpClient.get<Movie[]>(url, {params: configP.configParams(config)});    
    }

    excluir(id: number): Observable<void> {
        return this.httpClient.delete<void>(url + id);
    }

    visualizar(id: number): Observable<Movie> {
        return this.httpClient.get<Movie>(url + id);
    }
    
}