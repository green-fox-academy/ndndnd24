
import { Thing } from './thing';
import { Fleet } from './fleet';



// let thing: Thing = new Thing('Get milk');
// let thing1 = new Thing('Get milk');
// let thing2 = new Thing('Get milk');
// let thing3 = new Thing('Get milk');
// thing.getName();

// -  You have the `Thing` class
// -  You have the `Fleet` class
// -  Create the `FleetOfThings` class with a `main` method
// -  Download those, use those
// -  In the `main` method create a fleet
// -  Achieve this output:
//  Crete a fleet of things to have this output:

// 1. [ ] Get milk
// 2. [ ] Remove the obstacles
// 3. [x] Stand up
// 4. [x] Eat lunch

// Hint: You have to create a `print()` method as well 

class fleetOfThings {
    fleet: Fleet = new Fleet();
    main() {
        this.fleet.add(new Thing('Get milk'));
        this.fleet.add(new Thing('Remove the obstacles'));
        this.fleet.add(new Thing('Stand up'));
        this.fleet.add(new Thing('Eat lunch'));
        this.fleet.getThings()[2].complete();
        this.fleet.getThings()[3].complete();
    }
    print() {
        this.fleet.getThings().forEach(function (afonya) { console.log(afonya.letItBe()) });
    }
}

// let fleet: Fleet = new Fleet();
// let newCDOne: Thing = new Thing('Get milk');
// let newCDTwo: Thing = new Thing('Remove the obstacles');
// let newCDThree: Thing = new Thing('Stand up');
// let newCDFour: Thing = new Thing('Eat lunch');
// fleet.add(newCDOne);
// fleet.add(newCDTwo);
// fleet.add(newCDThree);
// fleet.add(newCDFour);

let mukodj = new fleetOfThings();
mukodj.main();
mukodj.print();