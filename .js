/* recall declared variables with let and const, variables declared with 
let can be reassigned, variables declared with the const word cannot be reassigned
Mutable means that content inside an array can be chnaged */

let condiments = ['Ketchup', 'Mustard','Relish'];
condiments[0] = 'Mayo';
console.log(condiments)

condiments = ['mayo'];
console.log(condiments)

let utensils = ['fork', 'spoon', 'knife'];
utensils[2] = 'spork';
console.log(utensils.length)



const newYearsResolutions = ['Keep a journal', 'Take a Falconry Class', 'Learn Kubernetes'];

console.log(newYearsResolutions.length-1)
// .length-1 is correct 
// when we want to know how many elements are in an  array, we can access the . length property

const itemTracker = ['item 0', 'item 1', 'item 2'];
itemTracker.push('item 3', 'item 4');
// .push allows items to be added to the end of an array
/* push  is a destructive array method, it chnaged
the initial array*/
console.log(itemTracker);

const chores = ['dishes', 'cook','clean'];
chores.push('wash','trash');
console.log(chores)

// .pop() removes the last item of an array 
const newItemTracker = ['item 0', 'item 1', 'item 2'];
const removed = newItemTracker.pop();
console.log(newItemTracker);
console.log(removed);

// .pop does ot take any arguments, retuens the value of the last element

const chores2 = ['dishes', 'cook','clean'];
const removed2 =chores2.pop();
console.log(chores2);
console.log(removed2);

const chores3 = ['dishes', 'cook','clean'];
chores3.unshift('trash');
console.log(chores3);
