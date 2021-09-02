import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './input-text/input-text.component';
import { InputTextAreaComponent } from './input-textarea/input-textarea.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { InputDateComponent } from './input-date/input-date.component';
import { InputSelectComponent } from './input-select/input-select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from '../../material/material.module';



@NgModule({
  declarations: [
    InputTextComponent,
    InputTextAreaComponent,
    InputDateComponent,
    InputNumberComponent,
    InputSelectComponent,
  ],
  exports: [
    InputTextComponent,
    InputNumberComponent,
    InputDateComponent,
    InputTextAreaComponent,
    InputSelectComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DemoMaterialModule,
    FormsModule
  ]
})
export class FieldsModule { }
