export default class Cookie {
    shape: string;
    hasSparkles: boolean;
    flavor: string;
    id: number;
    static lastId: number = 1;
    private status: string = 'raw';
    static isYummi: boolean = true;


    bakeMe() {
        this.status = "baked to perfection";
    }

    checkMyStatus() {
        return this.status;
    }

    static howAreYouToday(mood: string) {
        return `I am doing ${mood}`;
    }

    constructor(shape: string, hasSparkles: boolean, flavor?: string) {
        this.shape = 'giraffe';
        this.hasSparkles = hasSparkles;
        this.flavor = flavor;
        this.id = Cookie.lastId;
        Cookie.lastId++;
    }
}


let myFirstCookie: Cookie = new Cookie('elephant', false, 'vanilla');
let mySecondCookie: Cookie = new Cookie('spider', true, 'chocolate');
console.log(myFirstCookie.checkMyStatus());
console.log(myFirstCookie);
myFirstCookie.bakeMe();
console.log(myFirstCookie);
console.log(mySecondCookie);
console.log(Cookie.howAreYouToday('exceptional'));

Math.random();
Math.PI;

//export default Cookie;
