import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { FieldsModule } from "../shared/components/field/fields.module";
import { DemoMaterialModule } from "../shared/material/material.module";
import { ListMoviesComponent } from "./list-movies/list-movies.component";
import { RegisterMoviesComponent } from "./register-movies/register-movies.component";
import { ViewMovieComponent } from './view-movie/view-movie.component';

@NgModule({
    declarations: [
        RegisterMoviesComponent,
        ListMoviesComponent,
        ViewMovieComponent
        ],
    imports: [
        CommonModule,
        DemoMaterialModule,
        ReactiveFormsModule,
        FormsModule,
        FieldsModule,
        InfiniteScrollModule
    ],
    exports: [
        RegisterMoviesComponent,
        ListMoviesComponent
    ]
    
})
export class MoviesModule{}