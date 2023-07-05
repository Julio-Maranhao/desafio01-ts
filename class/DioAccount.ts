export abstract class DioAccount {
	private readonly name: string;
	private readonly accountNumber: number;
	private balance: number = 0;
	private status: boolean = true;

	constructor(name: string, accountNumber: number) {
		this.name = name;
		this.accountNumber = accountNumber;
	}

	getName = (): string => {
		return this.name;
	};

	deposit = (value: number): void => {
		if (this.validateStatus()) {
			this.balance += value;
			console.log(`Depósito - R$${value.toFixed(2).replace(".", ",")}`);
		}
	};

	withdraw = (value: number): void => {
		if (this.validateStatus() && this.balance >= value) {
			this.balance -= value;
			console.log(`Saque - R$${value.toFixed(2).replace(".", ",")}`);
		}
	};

	getBalance = (): void => {
		console.log(`Saldo - R$${this.balance.toFixed(2).replace(".", ",")}`);
	};

	private validateStatus = (): boolean => {
		if (this.status) {
			return this.status;
		}

		throw new Error("Conta inválida");
	};
}
