// interfaces describing object properties 
interface Pair<T, U> {
    first: T;
    second: U;
}

let p: Pair<string, number>= {first: '10K', second:1000};
console.log(p);
const person: Pair<string, string> = {first: 'Jane', second: 'Malik'}
console.log(person);


interface Command<T, R>{
    id: T;
    run(): R;
}

let c: Command<string, number> = {
    id: Math.random().toString(36),
    run: function() {
        return 3;
    }
};

console.log(c.id);
console.log(c.run());


// interfaces describing function type 
interface ElementChecker {
    <T>(items: T[], toBeChecked: T, atIndex: number): boolean;
}

function checkElementAt<T>(
    items: T[],
    toBeChecked: T,
    atIndex: number 
    ) : boolean {
        return items[atIndex] == toBeChecked;
    }

    let checker: ElementChecker = checkElementAt;
    let items = [1,3,5,7];
    let b: boolean = checker<number>(items, 5,1);
    console.log(b); // false, at index 1, it is 3 not 5
    let b2: boolean = checker<number>(items, 5,2);
    console.log(b2); // true , at index of 2, it is 5

    // interface describing indexables 
    interface States<R> {
        [state:string]:R;
    }

    let s: States<boolean> = {enabled: true, maximized:false};
    console.log(s);
    console.log(s['maximized']);