console.log("=== ARRAY FUNCTIONS EXAMPLES ===\n");

// Datos de ejemplo
let fruits = ['apple', 'banana', 'orange', 'grape'];
let numbers = [1, 2, 3, 4, 5];
let students = [
    { name: 'Ana', age: 20, grade: 85 },
    { name: 'Carlos', age: 22, grade: 92 },
    { name: 'Sofia', age: 19, grade: 78 },
    { name: 'Diego', age: 21, grade: 88 }
];

// 1. MUTATOR METHODS
console.log("1. MUTATOR METHODS:");
console.log(fruits.push('mango'), fruits); // push
console.log(fruits.pop(), fruits); // pop
console.log(fruits.unshift('strawberry'), fruits); // unshift
console.log(fruits.shift(), fruits); // shift
let copy = [...fruits];
console.log(copy.splice(1, 1, 'kiwi'), copy); // splice (remove/add)
let nums = [5, 2, 8, 1, 9];
console.log(nums.sort((a, b) => a - b), nums); // sort
console.log(nums.reverse(), nums); // reverse

// 2. ACCESSOR METHODS
console.log("\n2. ACCESSOR METHODS:");
let vegetables = ['carrot', 'lettuce'];
console.log(fruits.concat(vegetables)); // concat
console.log(numbers.slice(1, 4)); // slice
console.log(fruits.includes('banana')); // includes
console.log(fruits.indexOf('orange')); // indexOf
console.log(fruits.lastIndexOf('banana')); // lastIndexOf
console.log(fruits.join(' - ')); // join
console.log(numbers.toString()); // toString

// 3. ITERATION METHODS
console.log("\n3. ITERATION METHODS:");
fruits.forEach((f, i) => console.log(i, f)); // forEach
console.log(fruits.map(f => f.toUpperCase())); // map
console.log(numbers.filter(n => n % 2 === 0)); // filter
console.log(numbers.reduce((a, b) => a + b, 0)); // reduce
console.log(numbers.reduceRight((a, b) => a - b)); // reduceRight
console.log(students.find(s => s.grade > 90)); // find
console.log(students.findIndex(s => s.name === 'Sofia')); // findIndex
console.log(numbers.some(n => n > 4)); // some
console.log(numbers.every(n => n > 0)); // every

// 4. OTHER USEFUL METHODS
console.log("\n4. OTHER USEFUL METHODS:");
let nested = [1, [2, [3, 4]]];
console.log(nested.flat(2)); // flat
let sentences = ['Hello world', 'JavaScript arrays'];
console.log(sentences.flatMap(s => s.split(' '))); // flatMap
console.log(new Array(5).fill('#')); // fill
let arr = [1,2,3,4,5];
console.log(arr.copyWithin(0, 3)); // copyWithin

// Ejercicios prácticos
console.log("\n=== PRACTICAL EXERCISES ===");
console.log(students.filter(s => s.grade >= 85).map(s => s.name)); // Nombres con nota >=85
console.log(students.reduce((sum, s) => sum + s.grade, 0) / students.length); // Promedio
console.log(students.map(s => `${s.name}: ${s.grade}%`).join(' | ')); // Resumen

console.log("\n=== END OF EXAMPLES ===");