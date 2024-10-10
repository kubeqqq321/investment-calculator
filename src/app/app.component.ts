import {Component, EventEmitter, Output, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {UserInputComponent} from './user-input/user-input.component';
import {InvestmentResultComponent} from './investment-results/investment-result.component';
import {InvestmentInputModel, InvestmentResult} from './investment-input.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserInputComponent, InvestmentResultComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  // resultData?: InvestmentResult[];

  // signals -> eventy w angularze (emituje wartość) - emituje wartość do rodzica (app.component)
  // resultData = signal<InvestmentResult[] | undefined>(undefined);
  
}
