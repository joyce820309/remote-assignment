function calculate(args) {
    let result;
    if (args.op === "+") {
        result = args.n1 + args.n2;
    } else if (args.op === "-") {
        result = args.n1 - args.n2;
    } else {
        result = "Not supported";
    }
    return result;
}
// Try to call calculate function correctly

//My first way:
console.log(calculate({n1:3, n2:4, op:'+'}))

//My second way:
class args {
    constructor(n1, n2, op){
    this.n1 = n1
    this.n2 = n2
    this.op = op
    } 
}

let rule = new args (10, 4, '-')
console.log(calculate(rule))
/*
For example, if we have an add function like this:
function add(args){
return args.n1+args.n2;
}
We can call it by passing an object created by JSON literal:
add({n1:3, n2:4}); // your first way
You should apply constructor or class as another way to create a proper object.
add(用類別或建構式產生的物件); // your another way
*/