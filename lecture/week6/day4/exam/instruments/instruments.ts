'use strict';

export abstract class Instrument {
    name: string;

    constructor(name?: string) {
        this.name = name;
    }

    abstract play(): void;
}

export abstract class StringedInstrument extends Instrument {
    numberOfStrings: number;

    constructor(numberOfStrings?: number) {
        super();
        this.numberOfStrings = numberOfStrings;
    }

    abstract play(): void;
    abstract sound(): void;
}

export class ElectricGuitar extends StringedInstrument {
    constructor(numberOfStrings: number = 6) {
        super(numberOfStrings);
        this.numberOfStrings = numberOfStrings;
    }

    sound(): string {
        return 'Twang';
    };

    play(): void {
        console.log(`Electric Guitar, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`);
    }
}

export class BassGuitar extends StringedInstrument {
    constructor(numberOfStrings: number = 4) {
        super(numberOfStrings);
        this.numberOfStrings = numberOfStrings;
    }

    sound(): string {
        return 'Duum-duum-duum';
    };

    play(): void {
        console.log(`Bass Guitar, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`);
    }
}

export class Violin extends StringedInstrument {
    constructor(numberOfStrings: number = 4) {
        super(numberOfStrings);
        this.numberOfStrings = numberOfStrings;
    }

    sound(): string {
        return 'Screech';
    };

    play(): void {
        console.log(`Violin, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`);
    }
}