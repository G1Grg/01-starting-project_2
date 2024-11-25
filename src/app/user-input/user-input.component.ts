import { Component, EventEmitter, Output, signal, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvestmentInput } from '../investment-input.model';
@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  //**************** code without using Signal ***********/
  // enteredInitialInvestment = '0';
  // enteredAnnualInvestment = '0';
  // enteredExpectedReturn = '5';
  // enteredDuration = '10';
  // @Output() calculate = new EventEmitter<InvestmentInput>();
  // onSubmit() {
  //   this.calculate.emit({
  //     initialInvestment: +this.enteredInitialInvestment,
  //     duration: +this.enteredDuration,
  //     expectedReturn: +this.enteredExpectedReturn,
  //     annualInvestment: +this.enteredAnnualInvestment,
  //   });
  // }


  // ******************* using signal ****************/
  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('10');
  calculate = output <InvestmentInput>();
  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment(),
      duration: +this.enteredDuration(),
      expectedReturn: +this.enteredExpectedReturn(),
      annualInvestment: +this.enteredAnnualInvestment(),
    })
    // this is to return value to its default
    this.enteredAnnualInvestment.set('0');
    this.enteredInitialInvestment.set('0');
    this.enteredExpectedReturn.set('0')
    this.enteredDuration.set ('10');
    ;
  }
}
