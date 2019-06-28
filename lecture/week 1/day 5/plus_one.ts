'use strict';

function substr(str: string, keyword: string) : number {
    return str.indexOf(keyword);
}

console.log(substr("this is what I'm searching in", "searching"));
console.log(substr("this is what I'm searching in", "not"));
console.log(substr("The cat \(Felis catus\) is a small carnivorous mammal.", "mammal"));
console.log(substr("The cat \(Felis catus\) is a small carnivorous mammal.", "small"));
console.log(substr("The cat \(Felis catus\) is a small carnivorous mammal.", "dog"));
console.log(substr("The cat \(Felis catus\) is a small carnivorous mammal.", "cat"));