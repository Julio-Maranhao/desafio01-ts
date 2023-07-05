import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
	constructor(name: string, accountNumber: number) {
		super(name, accountNumber);
	}

	getLoan = (value: number): void => {
		console.log(
			"Caso o empréstimo seja aprovado, em breve o valor será depositado em sua conta."
		);
		this.deposit(value);
	};
}
