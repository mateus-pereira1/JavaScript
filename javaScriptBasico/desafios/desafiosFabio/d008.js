function myFunction(a,b){
    let newArray = a.concat(b);

    let filtredArray = new Set(newArray);

    return filtredArray;
    


}

console.log(myFunction([1,2,3],[3,4,5]));
console.log(myFunction([6,7],[8,9]));
console.log(myFunction([-2,-1,0,1,2],[-1,1,2,3]));