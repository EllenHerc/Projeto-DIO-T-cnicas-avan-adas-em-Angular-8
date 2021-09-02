import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMoviesComponent } from './movie/list-movies/list-movies.component';
import { RegisterMoviesComponent } from './movie/register-movies/register-movies.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'filmes',
    pathMatch: 'full'
  }, 
  {
    path: 'filmes',
    children: [
      {
        path: '',
        component: ListMoviesComponent
      },
      {
        path: 'cadastro',
        children: [
          {
            path: '',
            component: RegisterMoviesComponent
          },
          {
            path: ':id',
            component: RegisterMoviesComponent
          }
        ]
      }
    ]
  },
  { 
    path: '**', 
    redirectTo: 'filmes' 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
