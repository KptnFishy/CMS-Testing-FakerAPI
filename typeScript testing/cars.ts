interface Car {
    brand: string;
    model: string;
    price: number;
    year: number;
}

const cars: Car[] = [ //mit von ChatGPT generierten Daten gefüllt
    { brand: "Toyota", model: "Camry", price: 28000, year: 2021 },
    { brand: "Honda", model: "Civic", price: 24000, year: 2022 },
    { brand: "Ford", model: "Mustang", price: 55000, year: 2023 },
    { brand: "Tesla", model: "Model 3", price: 42000, year: 2022 },
    { brand: "BMW", model: "X5", price: 61000, year: 2021 },
    { brand: "Mercedes-Benz", model: "C-Class", price: 48000, year: 2020 },
    { brand: "Audi", model: "A4", price: 45000, year: 2023 },
    { brand: "Chevrolet", model: "Impala", price: 32000, year: 2019 },
    { brand: "Hyundai", model: "Elantra", price: 21000, year: 2021 },
    { brand: "Kia", model: "Sportage", price: 27000, year: 2022 }
];

const getTotalPrice = (cars: Car[]): number => {
    return cars.reduce((total, car) => total + car.price, 0);
};

const printCars = (cars: Car[]): void => {
    cars.forEach((car, index) => {
        console.log(`Car ${index + 1}:`);
        console.log(`Brand: ${car.brand}, Model: ${car.model}, Price: ${car.price}, Year: ${car.year}`);
    });
}

const getExpensiveCars = (cars: Car[], minPrice: number): Car[] => {
    return cars.filter((car) => car.price >= minPrice);
}

let totalPrice = getTotalPrice(cars);
console.log("Total price of all cars:", totalPrice);
printCars(cars);
let expensiveCars = getExpensiveCars(cars, 30000);
console.log("Expensive cars:", expensiveCars);