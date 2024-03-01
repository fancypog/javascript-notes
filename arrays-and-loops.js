const myArray = [10, 20, 30];
console.log(myArray);

console.log(myArray[0]);
myArray[0] = 99;
console.log(myArray);



[1, 'hello', true, {name: 'socks'}, [1,2]]

Array.isArray([1,2]);
typeof [1,2]  //Object. Array is a special object

myArray.push(100);
console.log(myArray);

myArray.splice(0, 2);
console.log(myArray);

const array1 =[1 ,2 ,3] //arrays are references
const array2 = array1 //pointing to the same place in memory
array2.push(4)
console.log(array1);
console.log(array2); //the same

const array3 =array1.slice(); //slice copies values


//deconstructuring

const array4 = [1, 2, 3];
const [firstValue, secondValue] = [1, 2, 3]; //get the first and the second value and save to variables

for (let i = 1; i <= 10; i++) {
  if(i === 3) {
    continue; //skip the rest of the iteration 
  }
  console.log(i);
  if(i === 8) {
    break; //stop the loop early
  }
}


let i = 1;

while (i <= 10) {
  if(i % 3 === 0) {
    i++;  //remember this in a while loop
    continue;
  }
  console.log(i);
  i++
}



