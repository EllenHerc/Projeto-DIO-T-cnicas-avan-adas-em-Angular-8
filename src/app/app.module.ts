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
import { InputTextComponent } from './shared/components/campos/input-text/input-text.component';
import { InputAreaComponent } from './shared/components/campos/input-textarea/input-textarea.component';
import { InputDateComponent } from './shared/components/campos/input-date/input-date.component';
import { InputNumberComponent } from './shared/components/campos/input-number/input-number.component';
import { InputSelectComponent } from './shared/components/campos/input-select/input-select.component';
import { RegisterMoviesComponent } from './movie/register-movies/register-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    FooterComponent,
    ListMoviesComponent,
    InputTextComponent,
    InputAreaComponent,
    InputDateComponent,
    InputNumberComponent,
    InputSelectComponent,
    RegisterMoviesComponent
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
