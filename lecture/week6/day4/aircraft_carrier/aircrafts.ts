'use strict';

export default class Aircrafts {
    aircraft: string;
    maxAmmo: number;
    baseDamage: number;
    currentAmmo: number;
    prio: boolean;
    causedDamage: number;

    constructor(aircraft: string) {
        this.aircraft = aircraft;
        if (this.aircraft === "F35") {
            this.maxAmmo = 12;
            this.baseDamage = 50;
            this.currentAmmo = 0;
            this.causedDamage = 0;
            this.prio = true;
        } else if (this.aircraft === "F16") {
            this.maxAmmo = 8;
            this.baseDamage = 30;
            this.currentAmmo = 0;
            this.causedDamage = 0;
            this.prio = false;
        }
    }

    fight(): number {
        let damageOutput = this.currentAmmo * this.baseDamage;
        this.causedDamage = damageOutput;
        this.currentAmmo = 0;
        return damageOutput;
    }

    refill(fillingNumber: number): number {
        let missingAmmo: number = 0;
        if (this.aircraft === "F35") {
            missingAmmo = this.maxAmmo - this.currentAmmo;
            this.currentAmmo = this.maxAmmo;
            return fillingNumber - missingAmmo;
        } else if (this.aircraft === "F16") {
            missingAmmo = this.maxAmmo - this.currentAmmo;
            this.currentAmmo = this.maxAmmo;
            return fillingNumber - missingAmmo;
        }
    }

    getType(): string {
        return this.aircraft;
    }

    getStatus(): string {
        let status: string = '';
        status = 'Type ' + this.getType() + ', Ammo: ' + this.currentAmmo + ', Base Damage: ' + this.baseDamage + ', All Damage: ' + this.causedDamage;
        return status;
    }

    isPriority(): boolean {
        return this.prio;
    }
}