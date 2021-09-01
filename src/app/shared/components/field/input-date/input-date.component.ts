import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { FieldValidationService } from '../field-validation.service';

@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.scss']
})
export class InputDateComponent implements OnInit {

  @Input() title: string;
  @Input() formGroup: FormGroup;
  @Input() controlName: string;

  constructor(public validation: FieldValidationService) { }

  get formControl(): AbstractControl{
      return this.formGroup.controls[this.controlName];
  }

  ngOnInit(): void {
  }

}
