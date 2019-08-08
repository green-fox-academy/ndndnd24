'use strict';

import Aircrafts from './aircrafts';

export default class Carrier {
    aircrafts: Aircrafts[];
    ammoStore: number;
    HP: number;
    allDamage: number;

    constructor(ammoStore: number, HP: number) {
        this.aircrafts = [];
        this.ammoStore = ammoStore;
        this.HP = HP
        this.allDamage = 0;
    }

    add(typeOfAircraft: string): void {
        this.aircrafts.push(new Aircrafts(typeOfAircraft));
    }

    fill(): void {
        let neededAmmo: number = 0;
        this.aircrafts.forEach(e => neededAmmo += e.maxAmmo);
        if (this.ammoStore === 0) {
        } else if (neededAmmo <= this.ammoStore) {
            for (let i: number = 0; i < this.aircrafts.length; i++) {
                this.ammoStore = this.aircrafts[i].refill(this.ammoStore);
            }
        } else {
            let i: number = 0;
            let e: number = 0;
            while (this.ammoStore > 0) {
                if (i !== this.aircrafts.length) {
                    if (this.aircrafts[i].isPriority()) {
                        this.ammoStore = this.aircrafts[i].refill(this.ammoStore);
                        i++;
                        if (this.ammoStore < 0) {
                            this.aircrafts[i - 1].currentAmmo += this.ammoStore;
                            this.ammoStore = 0;
                        }
                    } else {
                        i++;
                    }
                } else {
                    this.ammoStore = this.aircrafts[e].refill(this.ammoStore);
                    e++;
                    if (this.ammoStore < 0) {
                        this.aircrafts[e - 1].currentAmmo += this.ammoStore;
                        this.ammoStore = 0;
                    }
                }
            }
        }
    }

    fight(whichCarrier: Carrier): void {
        let currentDamage: number = 0;
        this.aircrafts.forEach(e => currentDamage += e.fight());
        this.allDamage += currentDamage;
        whichCarrier.HP -= currentDamage;
    }

    getStatus(): string {
        let status: string = '';
        if (this.HP <= 0) {
            return 'It\'s dead Jim :('
        } else {
            status = 'HP: ' + this.HP + ', Aircraft count: ' + this.aircrafts.length + ', Ammo Storage: ' + this.ammoStore + ', Total damage: ' + this.allDamage + '\n';
            if (this.aircrafts.length !== 0) {
                status += 'Aircrafts:\n'
            }
            for (let i: number = 0; i < this.aircrafts.length; i++) {
                status += this.aircrafts[i].getStatus() + '\n';
            }
        }
        return status;
    }
}