class Cars {
    private brand: string = "";
    private model: string = "";
    private price: number = 0;
    private year: number = 0;

    constructor(brand: string, model: string, price: number, year: number) {
        this.setBrand(brand);
        this.setModel(model);
        this.setPrice(price);
        this.setYear(year);
    }

    public setBrand(brand: string): void {
        this.brand = brand;
    }

    public getBrand(): string {
        return this.brand;
    }

    public setModel(model: string): void {
        this.model = model;
    }

    public getModel(): string {
        return this.model;
    }

    public setPrice(price: number): void {
        if (price < 0) {
            this.price = 0;
        } else {
            this.price = price;
        }
    }

    public getPrice(): number {
        return this.price;
    }

    public setYear(year: number): void {
        if (year > new Date().getFullYear()) {
            this.year = new Date().getFullYear();
        } else {
            this.year = year;
        }
    }

    public getYear(): number {
        return this.year;
    }

}

let car = new Cars("Toyota", "Camry", 28000, 2021);

console.log(car);

console.log(car.getPrice());
console.log(car.getYear());
console.log(car.getModel());
console.log(car.getBrand());
