import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


const url = "http://localhost:3000/filmes/";

@Injectable({
    providedIn: 'root'
})
export class FilmesService{

    constructor(private httpClient: HttpClient){ }

    
}