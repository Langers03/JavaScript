import BankAccount from './bankAccount.js';

const account1 = new BankAccount(649723, 'Cloud Strife');
const account2 = new BankAccount(532346, 'Pinstripe Potoroo');

account1.deposit(400);
account2.deposit(300);

account1.withdraw(300);
account2.withdraw(200);

account1.checkBalance();
account2.checkBalance();