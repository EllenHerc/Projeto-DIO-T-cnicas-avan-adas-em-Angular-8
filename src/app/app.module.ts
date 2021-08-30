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

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    FooterComponent,
    ListMoviesComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
