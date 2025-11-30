// Завдання 1 Напиши скрипт, який, для об'єкта user, послідовно: додає поле mood зі значенням 'happy' замінює значення hobby на 'skydiving' замінює значення premium на false виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of

const user = {
  name: "Mango",
  age: 20,
  hobby: "sport",
  premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

const keys = Object.keys(user);
for (const key of keys) {
  console.log(key + ":" + user[key]);
}

// Завдання 2 Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. Функція повертає число — кількість властивостей.

function countProps(obj) {
  return Object.keys(obj).length;
}

console.log(countProps({ name: "Apple", price: 20 }));
console.log(countProps({ a: 1, b: 2, c: 3 }));

// Завдання 3 Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого (який виконав більше всіх задач). Співробітники і кількість виконаних завдань містяться як властивості об'єкта в форматі "ім'я":"кількість задач".

function findBestEmployee(employees) {
  let bestName = "";
  let bestValue = 0;

  for (const name in employees) {
    if (employees[name] > bestValue) {
      bestValue = employees[name];
      bestName = name;
    }
  }
  return bestName;
}

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    mark: 1,
    bob: 99,
  })
);

// Завдання 4 Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. Функція рахує загальну суму зарплати працівників і повертає її. Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".

function countTotalSalary(employees) {
  let total = 0;
  for (const name in employees) {
    total += employees[name];
  }
  return total;
}

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
);

// Завдання 5 Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості. Повертає масив значень певної властивості prop з кожного об'єкта в масиві.

function getAllPropValues(arr, prop) {
  const result = [];

  for (const obj of arr) {
    if (prop in obj) {
      result.push(obj[prop]);
    }
  }

  return result;
}

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
];

console.log(getAllPropValues(products, "name"));
console.log(getAllPropValues(products, "price"));
console.log(getAllPropValues(products, "quantity"));

// Завдання 6 Напиши функцію calculateTotalPrice(allProdcuts, productName), яка отримує масив об'єктів та ім'я продукту (значення властивості name). Повертає загальну вартість продукту (ціна * кількість). Викличи функції для перевірки працездатності твоєї реалізації.

function calculateTotalPrice(allProducts, productName) {
  let total = 0;

  for (const product of allProducts) {
    if (product.name === productName) {
      total = product.price * product.quantity;
    }
  }

  return total;
}

console.log(calculateTotalPrice(products, "Radar"));
console.log(calculateTotalPrice(products, "Droid"));




