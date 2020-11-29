// IMC Calc exercise

const name = "Carlos";
const wheight = 84;
const height = 1.88;

function calcIMC() {
  let imc =  wheight / (height * height);

  if(imc >= 30) {
    console.log(`${name} Carlos você está acima do peso`);
  } else if(imc <= 29.9) {
    console.log(`${name} você não está acima do peso`);
  }
}

calcIMC();


// Retirement calculation exercise

const name = "Silvana";
const sex = "F";
const age = 48;
const contribuation = 23;

function calcRetirement() {
  let ruleRetirement = age + contribuation;

  if(sex === "F" && contribuation >= 30 && ruleRetirement >= 85) {
    console.log(`${name}, você pode se aposentar!`);
  } else if(sex === "M" && contribuation >= 35 && age + contribuation >= 95) {
    console.log(`${name}, você pode se aposentar! ...`);
  } else {
    console.log(`${name}, você não pode se aposentar!`);
  }
}

calcRetirement();


// Create OBJ exercise

const company = {
  name: 'Rocketseat',
  color: 'Roxo',
  focus: 'Programação',
  address: {
    street: 'Rua Guilherme Gembala',
    number: '260'
  }
};

const {name, address: {street, number}} = company;

console.log(`A empresa ${name} está localizada em ${street}, ${number}`);


// Vector and Object exercise

const programer = {
  name: 'Bruno',
  age: '24',
  technologys: [
    {
      name: 'JavaScript',
      specialty: 'Web'
    },
    {
      name: 'ReactJs',
      specialty: 'Web'
    },
    {
      name: 'CSS',
      specialty: 'Web'
    }
  ]
};

const {name, age} = programer;

console.log(`O usuário ${name} tem ${age} anos e usa a tecnologia ${programer.technologys[0].name} com especialidade em ${programer.technologys[0].specialty}`);


// Repeat Struct exercise

const users = [
  { 
    name: "Bruno", 
    technologys: ["JavaScript", "CSS"] 
  },
  { 
    name: "Camila", 
    technologys: ["JavaScript", "CSS"] 
  },
  { 
    name: "Steve", 
    technologys: ["HTML", "Node.js"] 
  }
];

for(let i = 0; i < users.length; i++) {
  console.log(`${users[i].name} trabalha com ${users[i].technologys.join(', ')}`);
};



// Search Technology exercise

function checkTechnology(user) {
  for(let technology of user.technologys){
    if(technology == 'CSS') return true;
  };
};

for (let i = 0; i < users.length; i++) {
  const userUseCss = checkTechnology(users[i]);

  userUseCss ? console.log(`O usuário ${users[i].name} trabalha com CSS`) : console.log(`O usuário ${users[i].name} não trabalha com CSS`);
};


// Sum of expenses and revenues exercise

const users = [
  {
    name: "Salvio",
    revenue: [115.3, 48.7, 98.3, 14.5],
    expenses: [85.3, 13.5, 19.9]
  },
  {
    name: "Marcio",
    revenue: [24.6, 214.3, 45.3],
    expenses: [185.3, 12.1, 120.0]
  },
  {
    name: "Lucia",
    revenue: [9.8, 120.3, 340.2, 45.3],
    expenses: [450.2, 29.9]
  }
];

function balanceCalc(revenue, expenses) {
  const sumRevenue = sumNumbers(revenue);
  const sumExpenses = sumNumbers(expenses);

  return sumRevenue - sumExpenses;
};

function sumNumbers(numbers) {
  let sum = 0;

  for(let number of numbers) {
    sum = number + sum;
  };

  return sum;
};

for (let user of users) {
  const balance = balanceCalc(user.revenue, user.expenses);

  if(balance > 0) {
    console.log(`${user.name} possui saldo POSITIVO de ${balance}`);
  } else {
    console.log(`${user.name} possui saldo NEGATIVO de ${balance}`);
  };
};


// Banking operation exercise

const user = {
  name: "Mariana",
  transactions: [],
  balance: 0
};

function createTransaction(transaction) {
  user.transactions.push(transaction);

  if(transaction.type === 'credit') {
    user.balance += transaction.value
  } else if(transaction.type === 'debit') {
    user.balance -= transaction.value
  } else {
    console.log('Essa não é uma transação válida')
  }
};

function getHigherTransactionByType(type) {
  let higherValue = 0;

  for(let transaction of user.transactions) {
    if(transaction.type == type && transaction.value > higherValue) {
      higherValue = transaction.value;
    };
  };

  return higherValue
};

function getAverageTransactionValue() {
  let sum = 0
  let averangeValue = 0

  for(let transactions of user.transactions) {
    sum = transactions.value + sum
  };

  averangeValue = sum / user.transactions.length;

  return averangeValue
};

function getTransactionsCount() {
  let count = {
    credit: 0,
    debit: 0
  };

  for(let transaction of user.transactions) {
    if(transaction.type == 'credit') {
      count.credit++;
    } else if(transaction.type == 'debit') {
      count.debit++;
    };
  };

  return count
};

createTransaction({ type: 'credit', value: 50 });
createTransaction({ type: 'credit', value: 120 });
createTransaction({ type: 'debit', value: 80 });
createTransaction({ type: 'debit', value: 30 });

console.log(user.balance);
console.log(getHigherTransactionByType('credit'));
console.log(getHigherTransactionByType('debit'));
console.log(getAverageTransactionValue());
console.log(getTransactionsCount());