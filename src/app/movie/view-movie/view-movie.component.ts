import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/core/movies.service';
import { AlertComponent } from 'src/app/shared/components/alert/alert.component';
import { Alert } from 'src/app/shared/models/alert';
import { Movie } from 'src/app/shared/models/movie';

@Component({
  selector: 'app-view-movie',
  templateUrl: './view-movie.component.html',
  styleUrls: ['./view-movie.component.scss']
})
export class ViewMovieComponent implements OnInit {

  filme: Movie;
  readonly semFoto = '../../assets/images/filme.PNG'; 

  constructor(public dialog: MatDialog,
              public dialogRef: MatDialogRef<ViewMovieComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private router: Router,
              private filmeService: MoviesService) { }

  ngOnInit(): void {

    if (this.data){
      this.filme = this.data.filme;
    } 
  }

  excluir(id: number): void{
    const config={
      data : {
        title: 'Tem certeza que deseja excluir?',
        description: 'Clique no botão Ok para concluir a exclusão.',
        colorBtnSucess: 'warn',
        colorBtnCancel: 'accent',
        btnClose: true
      } as Alert    
    };

    const dialogRef = this.dialog.open(AlertComponent, config);
    dialogRef.afterClosed().subscribe((opcao: boolean) => {
      if(opcao){
        this.filmeService.excluir(id)
        .subscribe(() => this.dialogRef.close('reload'));
      }
    })
  }

  editar(id: number): void{
    this.dialogRef.close(id); 
  }

}
