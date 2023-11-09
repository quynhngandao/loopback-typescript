function log(target, key, descriptor){
    console.log(`${key} was called`);
}

class Calculator {
    // using the decorator @log

    @log
    square(n:number){
        return n*n;
    }
}