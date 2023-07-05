import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";
import { PromotionalAccount } from "./class/PromotionalAccount";

const companyAccount = new CompanyAccount("DIO", 1);
const peopleAccount = new PeopleAccount(1, "Jose", 2);
const promotionalAccount = new PromotionalAccount("Artur", 3);

// Test companyAccount

console.log(companyAccount.getName());
companyAccount.deposit(500);
companyAccount.getLoan(15000);
companyAccount.getBalance();
companyAccount.withdraw(1500);
companyAccount.getBalance();

// Test peopleAccount

console.log(peopleAccount.getName());
peopleAccount.getBalance();
peopleAccount.deposit(2500);
peopleAccount.withdraw(1500);
peopleAccount.getBalance();

// Test promotionalAccount

console.log(promotionalAccount.getName());
promotionalAccount.deposit(2500);
promotionalAccount.promoDeposit(150);
promotionalAccount.getBalance();
promotionalAccount.withdraw(1500);
promotionalAccount.getBalance();
