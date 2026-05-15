export abstract class Vehicle {
    constructor(protected numberOfSeats: number) { }

    abstract getNumberOfSeats(): number;
}

export class Tesla extends Vehicle {

    constructor(numberOfSeats: number) {
        super(numberOfSeats);
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Audi extends Vehicle {

    constructor(numberOfSeats: number) {
        super(numberOfSeats);
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Toyota extends Vehicle {

    constructor(numberOfSeats: number) {
        super(numberOfSeats);
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Honda extends Vehicle {

    constructor(numberOfSeats: number) {
        super(numberOfSeats);
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}