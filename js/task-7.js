// Типы транзацкий
const transactionType = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};
// Ведение счета
const account = {
  // Баланс
  balance: 0,
  // История транзакций
  transactions: [],
  // Метод создает и возвращает объект транзакции
  createTransaction(amount, type) {
    let uniqId = new Date().getTime();
    const transaction = {
      id: uniqId,
      type: type,
      amount: amount,
    };
    return transaction;
  },
  // Метод отвечающий за добавление суммы к балансу
  deposit(amount) {
    const type = transactionType.DEPOSIT;
    this.balance += amount;
    const newTransaction = this.createTransaction(amount, type);
    this.transactions.push(newTransaction);
    return console.log(`Ваш счет успешно поплнен на ${amount}`);
  },
  // Метод отвечающий за снятие суммы с баланса
  withdraw(amount) {
    const type = transactionType.WITHDRAW;
    if (amount > this.balance) {
      return alert(`Cнятие ${amount} невозможно, недостаточно средств`);
    }

    this.balance -= amount;
    const newTransaction = this.createTransaction(amount, type);
    this.transactions.push(newTransaction);
    return console.log(`С Вашего счета успешно снято ${amount}`);
  },
  // Метод возвращает текущий баланс
  getBalance() {
    return this.balance;
  },

  // Метод ищет и возвращает объект транзации по id
  getTransactionDetails(id) {
    for (const trans of this.transactions) {
      if (trans.id === id) {
        return trans;
      }
    }
  },

  // Метод возвращает количество средств определенного типа транзакции из всей истории транзакций
  getTransactionTotal(type) {
    let totalAmount = 0;
    for (const item of this.transactions) {
      if (item.type === type) {
        totalAmount += item.amount;
      }
    }
    return totalAmount;
  },
};

console.log(account.deposit(1100));

console.log(account.withdraw(500));

console.log(account.withdraw(500));

console.log(account.getBalance());

console.log(account.transactions);

console.log(account.getTransactionDetails(1607874366539));

console.log(account.getTransactionTotal("deposit"));

console.log(account.getTransactionTotal("withdraw"));
