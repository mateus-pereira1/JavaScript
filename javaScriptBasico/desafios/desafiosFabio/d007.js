function myFunction(a, order = 'asc'){
    if(order === 'asc'){
        return a.sort();
    } else if(order === 'desc'){
        return a.sort((a,b) => b - a);
    }
}

console.log(myFunction([2,3,1], 'asc'));

console.log(myFunction([6,2,8,1,5], 'desc'));

console.log(myFunction(['uva', 'maçã', 'laranja'], 'asc'));

console.log(myFunction(['t','a','s','z','m']));