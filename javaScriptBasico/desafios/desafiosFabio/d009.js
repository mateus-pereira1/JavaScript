function myFunction(a,b){
    let soma = 0
    for(let i = 0; i <= a.length; i++){
        if(a[i] > b){
            soma = soma + a[i]
        }
    }

    return soma
}

console.log(myFunction([1,2,3,4,5,6,7,8],3));

console.log(myFunction([-14,-12,-5,4,-4],-5));

console.log(myFunction([33,45,88,105,111],99));