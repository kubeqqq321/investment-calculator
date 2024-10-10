import {Component, EventEmitter, output, Output, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Data} from '@angular/router';
import {InvestmentInputModel} from '../investment-input.model';
import {InvestmentService} from '../../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  // @Output() calculate = new EventEmitter<InvestmentInputModel>();

  // enteredInvestmentValue: string = '0';
  // enteredDuration: string = '0';
  // enteredAnnualInvestment: string = '5';
  // enteredExpected: string = '10';

  // to co powyżej ale stworzone przy pomocy signal

  calculate = output<InvestmentInputModel>()
  enteredInvestmentValue = signal('0');
  enteredDuration = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExpected = signal('0');

  // ten konstruktor mówi angularowi że powinien wstrzyknąć instancję InvestmentService jako wartość dla tej klasy
  constructor(private investmentService: InvestmentService) {
  }

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.enteredInvestmentValue(),
      duration: +this.enteredDuration(),
      annualInvestment: +this.enteredAnnualInvestment(),
      expectedReturn: +this.enteredExpected()
    });
    // this.calculate.emit({
    //   // + -> dodanie plusa przed zmienną (string) zamienia na liczbę
    //   initialInvestment: +this.enteredInvestmentValue(),
    //   duration: +this.enteredDuration(),
    //   annualInvestment: +this.enteredAnnualInvestment(),
    //   expectedReturn: +this.enteredExpected()
    // });
    this.enteredAnnualInvestment.set('0');
    this.enteredDuration.set('0');
    this.enteredExpected.set('0');
    this.enteredInvestmentValue.set('0');
  }
}
