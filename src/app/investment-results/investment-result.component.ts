import {Component, computed, inject, input, Input} from '@angular/core';
import {InvestmentResult} from '../investment-input.model';
import {CurrencyPipe} from '@angular/common';
import {InvestmentService} from '../../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [
    CurrencyPipe
  ],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent {

  // @Input({required: true}) investmentResult!: InvestmentResult;

  // ? -> mówi angularowi że ta właściwość jest opcjonalna i może ona posiadać watość ale nie musi
  // ! -> mówi angularowi że w tym miejscu zawsze musi pojawić sie wartość
  // @Input() results?: InvestmentResult[];

  // results = input<InvestmentResult[]>()

  private investmentService = inject(InvestmentService);
  results = computed(() => this.investmentService.resultData());
  // asReadonly() -> jest metodą do które można odwoływać się aby uzyskać
  // wersje tych sygnałów tylko do odczytu (nie można manipulować)
  // results = this.investmentService.resultData.asReadonly();
  //
  // get results() {
  //   return this.investmentService.resultData;
  // }

}
