// 1
const user = {
  hobby: "football",
  premium: true,
};
user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;
const entries = Object.entries(user);
for (const [key, value] of entries) {
  console.log(`${key}: ${value}`);
}
// 2
const shakhtar = {
  city: "Donezk",
  country: "Ukraine",
  brazilianPlayer: true,
};
const countProps = ({ ...obj }) => Object.keys(obj).length;
console.log(countProps(shakhtar));
// 3
const employeesObj = {
  Anton: 5,
  Sergiy: 7,
  Vasyl: 5,
};
const findBestEmployee = (employeesObj) => {
  const maxValue = Math.max(...Object.values(employeesObj));
  for (const [name, score] of Object.entries(employeesObj)) {
    if (score === maxValue) console.log(`${name}: ${score}`);
  }
};
findBestEmployee(employeesObj);
// 4
const salaries = {
  Dovbyk: 3500000,
  Lunin: 4000000,
  Tsygankov: 2324445,
};
const countTotalSalary = ({ Dovbyk, Lunin, Tsygankov }) =>
  Dovbyk + Lunin + Tsygankov;
console.log(countTotalSalary(salaries));
// 5
const players = {
  Lunin: 3500000,
  Ronaldo: 150000000,
  Vinicius: 52000000,
};
const getAllPropValues = (prop, { [prop]: value = null }) => value;
console.log(getAllPropValues("Ronaldo", players));
console.log(getAllPropValues("Messi", players));

// 6
const products = [
  { name: "Apple", price: 10, quantity: 5 },
  { name: "Banana", price: 7, quantity: 8 },
  { name: "Orange", price: 12, quantity: 3 },
];
const calculateTotalPrice = (products, productName) => {
  const product = products.find(({ name }) => name === productName);
  return product ? product.price * product.quantity : 0;
};
console.log(calculateTotalPrice(products, "Apple"));
console.log(calculateTotalPrice(products, "Banana"));
console.log(calculateTotalPrice(products, "Orange"));
