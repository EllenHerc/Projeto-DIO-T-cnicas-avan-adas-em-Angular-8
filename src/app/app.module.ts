import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './shared/material/material.module';
import { TopNavComponent } from './shared/components/top-nav/top-nav.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ListMoviesComponent } from './movie/list-movies/list-movies.component';
import { RegisterMoviesComponent } from './movie/register-movies/register-movies.component';
import { FieldModule } from './shared/components/field/field.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    FooterComponent,
    ListMoviesComponent,
    RegisterMoviesComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    ReactiveFormsModule,
    FieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
