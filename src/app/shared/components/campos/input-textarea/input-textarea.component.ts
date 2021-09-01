import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { FieldValidationService } from '../field-validation.service';

@Component({
  selector: 'app-input-area',
  templateUrl: './input-area.component.html',
  styleUrls: ['./input-area.component.scss']
})
export class InputAreaComponent implements OnInit {

  @Input() title: string;
  @Input() formGroup: FormGroup;
  @Input() controlName: string;

  constructor(validation: FieldValidationService) { }

  get formControl(): AbstractControl{
    return this.formGroup.controls[this.controlName];
  }
  ngOnInit(): void {
  }

}
