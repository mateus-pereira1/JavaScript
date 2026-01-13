function funcao(text,flag = 'start'){
    if(text.length < 3){
        return text
    } else if(text.length >= 3 && flag === 'start'){
        return text.slice(0,3)
    } else if(text.length >= 3 && flag === 'end'){
        return text.slice(-3)
    }
}

console.log(funcao('abcdefg', 'start'))
console.log(funcao('abcdefg', 'end'))
console.log(funcao('ab', 'end'))
console.log(funcao('abcdefg'))
