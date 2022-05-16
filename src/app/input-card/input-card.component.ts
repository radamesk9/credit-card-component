import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { getValidationConfigFromCardNo } from '../helpers/card.helper';
import { luhnValidator } from '../validators/luhnValidator';


@Component({
  selector: 'app-input-card',
  templateUrl: './input-card.component.html',
  styleUrls: ['./input-card.component.scss']
})
export class InputCardComponent implements OnInit {
  cardNumberGroup: FormGroup | any;

  constructor() {
    this.cardNumberGroup = new FormGroup({
      cardNumber: new FormControl('', [
        Validators.required,
        luhnValidator
      ])
    });
  }

  ngOnInit() {
    this.cardNumberGroup = new FormGroup({
      cardNumber: new FormControl('', [
          Validators.required,
          Validators.minLength(12),
          luhnValidator()
        ])
    })
  }

  getCardNumberControl(): AbstractControl | any {
    return this.cardNumberGroup && this.cardNumberGroup.get('cardNumber');

  }

  cardMaskFunction(rawValue: string): Array<RegExp> {
    const card = getValidationConfigFromCardNo(rawValue);
    if (card) {
      return card.mask;
    }
    return [/\d/];
  }
}