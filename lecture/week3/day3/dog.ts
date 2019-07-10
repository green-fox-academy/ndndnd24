class Dog {
    static animalType: string = 'mammal';  //true to all dogs

}

Dog.animalType = 'reptile'; //overwritten
console.log(Dog.animalType);