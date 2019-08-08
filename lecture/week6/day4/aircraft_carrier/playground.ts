'use strict';

import Carrier from "./carrier";

let carrier: Carrier = new Carrier(30, 5000);
let enemyCarrier: Carrier = new Carrier(5000, 2500);


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
