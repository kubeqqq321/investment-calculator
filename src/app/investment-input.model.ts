// model danych wejściowych dla formularza

// interace -> interface to słowo kluczowe, które definiuje nowy typ danych w TypeScript.
// W tym przypadku, interfejs InvestmentInputModel definiuje nowy typ danych,
export interface InvestmentInputModel {
  initialInvestment: number,
  duration: number,
  annualInvestment: number,
  expectedReturn: number
}

export interface InvestmentResult {
  year: number,
  interest: number,
  valueEndOfYear: number,
  annualInvestment: number,
  totalInterest: number,
  totalAmountInvested: number,
}

