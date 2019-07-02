let listA: string[] = ["Apple", "Avocado", "Blueberries", "Durian", "Lychee"];
let listB: string[] = [];

for (let index: number = 0; index < listA.length; index++) {
    listB[index] = listA[index];
}

if (listA.indexOf("Durian") > -1) {
    console.log("List A contains Durian.");
} else {
    console.log("List A does not contains Durian.");
}


listB.splice((listB.indexOf("Durian")), 1);


listA.splice(4, 0, "Kiwifruit");


console.log("List A is " + listA.length + " element long.");
console.log("List B is " + listB.length + " element long.");
if (listA.length > listB.length) {
    console.log("List A contains more elements.")
} else if (listA.length == listB.length) {
    console.log("They contain the same amount of elements.")
} else {
    console.log("List B contains more elements.")
}

console.log(listA.indexOf("Avocado"));
console.log(listB.indexOf("Durian"));

listB.push("Passion Fruit", "Pomelo");

console.log(listA[2]);




/*Create a list('List A') which contains the following values
Apple, Avocado, Blueberries, Durian, Lychee
Create a new list('List B') with the values of List A
Print out whether List A contains Durian or not
Remove Durian from List B
Add Kiwifruit to List A after the 4th element
Compare the size of List A and List B
Get the index of Avocado from List A
Get the index of Durian from List B
Add Passion Fruit and Pomelo to List B in a single statement
Print out the 3rd element from List A*/