import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { FieldValidationService } from '../field-validation.service';

@Component({
  selector: 'app-input-textarea',
  templateUrl: './input-textarea.component.html',
  styleUrls: ['./input-textarea.component.scss']
})
export class InputTextAreaComponent implements OnInit {

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
