function funcao(fullname,flag = ''){
    if(flag == 'firstname'){
        let arrayDeNomes = fullname.split(' ');
        let firstName = arrayDeNomes[0]
        return firstName;
    } else if(flag == 'lastname'){
        let arrayDeNomes = fullname.split(' ');
        let lastName = arrayDeNomes.pop()
        return lastName;
    }

    if(flag == ''){
        return fullname
    }
}

console.log(funcao('mateus pereira sousa', ''))