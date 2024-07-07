const array = [
  { name: 'apple', birth: '2000-01-01' },
  { name: 'banana', birth: '1990-10-01' },
  { name: 'watermelon', birth: '1985-12-01' }
];
// result: [
//   { name: "apple", birth: "2000-01-01", age: 21 },
//   { name: "banana", birth: "1990-10-01", age: 31 },
//   { name: "watermelon", birth: "1985-12-01", age: 36 },
// ]
let calculateAge = (birthDate) => {
  const birthYear = new Date(birthDate).getFullYear()
  const currentYear = new Date().getFullYear()
  return currentYear - birthYear
}

const result = array.map(item => ({
  ...item,
  age: calculateAge(item.birth)
}))

console.log(result)
