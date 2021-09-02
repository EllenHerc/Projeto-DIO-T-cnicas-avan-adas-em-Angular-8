import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { FieldsValidationService } from '../fields-validation.service';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent implements OnInit {

  @Input() title: string;
  @Input() min: number = 0;
  @Input() max: number = 10;
  @Input() step: number = 1;
  @Input() controlName: string;
  @Input() formGroup: FormGroup;

  constructor(public validation: FieldsValidationService) { }

  get formControl(): AbstractControl{
    return this.formGroup.controls[this.controlName];
  }
  
  ngOnInit(): void {
  }

}
