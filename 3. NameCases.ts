let personName :string = '';

personName = prompt('What is your name?') ||'';

let lowerCase :string = personName.toLocaleLowerCase();
let UpperCase :string = personName.toUpperCase();
let tittleCase :string = personName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')


if(personName !== null && personName !== ''){
    alert(`Hello ${personName}, Here are you Name in:
    lowerCase: ${lowerCase}
    UpperCase: ${UpperCase}
    tittleCase: ${tittleCase}`)
}
else{
    alert('Please fill your name !')
}