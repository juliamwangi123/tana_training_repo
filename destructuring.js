
// ------------------------------------------------------------
// 1. Object destructuring — assign values to variables
// ------------------------------------------------------------

const user = {
  name: 'Wambo',
  role: 'QA Engineer',
  company: 'Source Intelligence',
};

const { name, role } = user;
// the olden way would have been const username = user.name;
console.log(name);  // 'Wambo'
console.log(role);  // 'QA Engineer'



// ------------------------------------------------------------
// 2. Nested object destructuring
// ------------------------------------------------------------

const profile = {
  name: 'Wambo',
  address: {
    city: 'Nairobi',
    country: 'Kenya',
  },
};

const { address: { city, country } } = profile;
console.log(city);    // 'Nairobi'
console.log(country); // 'Kenya'


// ------------------------------------------------------------
// 3. Array destructuring
// ------------------------------------------------------------

const scores = [1, 4, 5, 9];

// position-based — skip items with empty commas
const [first, , , fourth] = scores;
console.log(first); // 1
console.log(fourth); // 9

// swap two variables without a temp variable
let a = 10, b = 20;
[a, b] = [b, a];
console.log(a, b); // 20 10


// ------------------------------------------------------------
// 4. Spread operator with destructuring
// ------------------------------------------------------------

const nums = [1, 4, 5, 9];

// grab the first item, collect the rest
const [head, ...tail] = nums;
console.log(head); // 1
console.log(tail); // [4, 5, 9]

// same works on objects
const { name: userName, ...rest } = { name: 'Wambo', role: 'QA', city: 'Nairobi' };
console.log(userName); // 'Wambo'
console.log(rest);     // { role: 'QA', city: 'Nairobi' }


// ------------------------------------------------------------
// 5. Destructuring in function parameters
// ------------------------------------------------------------

// destructure directly in the signature
function greet({ name, role }) {
  console.log(`Hi ${name}, you are ${role}`);
}

greet({ name: 'Wambo', role: 'QA Engineer' });
// Hi Wambo, you are QA Engineer


