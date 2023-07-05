import { DioAccount } from "./DioAccount";

export class PromotionalAccount extends DioAccount {
	constructor(name: string, accountNumber: number) {
		super(name, accountNumber);
	}

	promoDeposit = (value: number): void => {
		console.log("Depósito promocional com R$10,00 de bonus.");
		this.deposit(value + 10);
	};
}
