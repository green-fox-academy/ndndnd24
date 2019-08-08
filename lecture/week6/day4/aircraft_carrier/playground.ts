'use strict';

import Carrier from "./carrier";
import Aircrafts from "./aircrafts";

let carrier: Carrier = new Carrier(30, 5000);
let enemyCarrier: Carrier = new Carrier(5000, 2500);

// let f16v1: Aircrafts = new Aircrafts()
// let f16v2: Aircrafts = new Aircrafts()
// let f16v3: Aircrafts = new Aircrafts()
// let f16v4: Aircrafts = new Aircrafts()
// let f35v1: Aircrafts = new Aircrafts()
// let f35v2: Aircrafts = new Aircrafts()

carrier.add('F35');
carrier.add('F16');
carrier.add('F35');
carrier.add('F16');
// carrier.add('F35');
// carrier.add('F16');
// console.log(carrier.getStatus());
// carrier.fight(enemyCarrier);
// console.log('enemy carrier:\n' + enemyCarrier.getStatus());
// console.log(carrier.getStatus());
carrier.fill();
carrier.fight(enemyCarrier);
console.log(carrier.getStatus());
console.log('enemy carrier:\n' + enemyCarrier.getStatus());
