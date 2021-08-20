let number = 3;
let isPrime = true;

for (let i = 2; i < number; i++) {
    let output = number % i;

    if (output == 0) {
        isPrime = false;
        break;
    }
}

if (isPrime) {
    console.log(number + " is a prime Number");
} else {
    console.log(number + " is not a prime Number");
}