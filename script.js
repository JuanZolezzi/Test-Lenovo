const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
navMenu.classList.toggle('show');
});

//EJERCICIO 1
//Create a function that receives an array of positive integers and returns an array with only the input’s pair numbers.

function obtenerNumerosPares(array) {
    const numerosPares = array.filter(numero => numero % 2 === 0);
    return numerosPares;
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = obtenerNumerosPares(numeros);
console.log(numerosPares);



//EJERCICIO 2
//Create a function that receives a String as parameter and returns a Boolean value indicating if the word is a palindrome* or not.

function esPalindromo(palabra) {
    palabra = palabra.toLowerCase().replace(/\s/g, '');

    const palabraInvertida = palabra.split('').reverse().join('');

    return palabra === palabraInvertida;
}

const palabra1 = "reconocer";
console.log(esPalindromo(palabra1));

const palabra2 = "hola";
console.log(esPalindromo(palabra2));



//EJERCICIO 3
/* Create a function that receives two numbers and shows the prime numbers between them (it includes both number)
If the function received 3 and 15 as the numbers, you should return something like: 3, 5, 7, 11, 13 */

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}

function primeNumbersBetween(start, end) {
    const primes = [];

    for (let number = start; number <= end; number++) {
        if (isPrime(number)) {
            primes.push(number);
        }
    }

    return primes.join(', ');
}

const start = 3;
const end = 15;
const primeNumbers = primeNumbersBetween(start, end);
console.log(primeNumbers);



//EJERCICIO 4 (Realizado en archivo "contador.html")
//Create a simple page with a button, that when clicked it updates the counter next to it.



//EJERCICIO 5
/* If you had to represent, using JS data types, this list: Large blue car - Small Red car - Large Blue car - Large Red car – Medium Blue car – Small Red car – Large Blue car – Medium Red car.
How would you do it? */

const carList = [
    { size: "Large", color: "Blue" },
    { size: "Small", color: "Red" },
    { size: "Large", color: "Blue" },
    { size: "Large", color: "Red" },
    { size: "Medium", color: "Blue" },
    { size: "Small", color: "Red" },
    { size: "Large", color: "Blue" },
    { size: "Medium", color: "Red" }
];


const firstCar = carList[0];
console.log(firstCar);

const thirdCarSize = carList[2].size;
console.log(thirdCarSize);



//EJERCICIO 6
//How would you represent it if the data was needed to be accessed easily by color? And how if it was needed to be accessed by size?

//color
const carsByColor = {
    Blue: [
        { size: "Large", color: "Blue" },
        { size: "Large", color: "Blue" },
        { size: "Medium", color: "Blue" },
        { size: "Large", color: "Blue" }
    ],
    Red: [
        { size: "Small", color: "Red" },
        { size: "Large", color: "Red" },
        { size: "Small", color: "Red" },
        { size: "Medium", color: "Red" }
    ]
};

const blueCars = carsByColor.Blue;
const firstRedCar = carsByColor.Red[0];

//size
const carsBySize = {
    Large: [
        { size: "Large", color: "Blue" },
        { size: "Large", color: "Blue" },
        { size: "Large", color: "Red" },
        { size: "Large", color: "Blue" }
    ],
    Medium: [
        { size: "Medium", color: "Blue" },
        { size: "Medium", color: "Red" }
    ],
    Small: [
        { size: "Small", color: "Red" },
        { size: "Small", color: "Red" }
    ]
};

const largeCars = carsBySize.Large;

const firstMediumCar = carsBySize.Medium[0];