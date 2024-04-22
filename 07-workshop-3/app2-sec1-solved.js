// Validador de contraseñas seguras

const userInputPassword = prompt(`Por favor ingresa tu contraseña segura, esta debe cumplir con las siguientes condiciones:\n1.Al menos 8 caracteres\n2.Al menos un numero\n3.Al menos una letra\n4.Al menos un caracter especial: ! @ # $ % ^ & * ( ) + = _ - { } [ ] : ; " ' ? < > , . | / \\ ~ \``);

// chequeo de caracteres
const lengthChecker = (el) => {
    return el.length >= 8;
}

// chequeo de numeros
const stringNumberChecker = (el) => {
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    return el.split("").some(e => numbers.includes(e));
}

// chequeo de letras
const letterChecker = (el) => {
    const lettersLowerCase = [
        'a', 'b', 'c', 'd', 'e', 'f',
        'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r',
        's', 't', 'u', 'v', 'w', 'x',
        'y', 'z'
    ]
    const lettersUpperCase = [
        'A', 'B', 'C', 'D', 'E', 'F',
        'G', 'H', 'I', 'J', 'L', 'M',
        'N', 'O', 'P', 'Q', 'R', 'S',
        'T', 'U', 'V', 'W', 'X', 'Y',
        'Z'
    ]
    return el.split("").some(e => {
        return lettersLowerCase.includes(e) || lettersUpperCase.includes(e)
    })
}

const specialCharacterChecker = (el) => {
    const specialCharacters = [
        '!', ' ', '@', ' ', '#', ' ', '$', ' ', '%',
        ' ', '^', ' ', '&', ' ', '*', ' ', '(', ' ',
        ')', ' ', '+', ' ', '=', ' ', '_', ' ', '-',
        ' ', '{', ' ', '}', ' ', '[', ' ', ']', ' ',
        ':', ' ', ';', ' ', '"', ' ', "'", ' ', '?',
        ' ', '<', ' ', '>', ' ', ',', ' ', '.', ' ',
        '|', ' ', '/', ' ', '\\', ' ', '~', ' ', '`'
    ];
    return el.split("").some(e => specialCharacters.includes(e))
}

// O con expresiones regulares
const onlyLowerCaseLetters = new RegExp("[a-z]"); // Los corchetes indican que se puede buscar cualquier caracter dentro de ellos
const onlyLowerUpperCaseLetters = /[a-zA-Z]/ // Tambien se puede hacer sin new RegExp
const onlyNumbers = new RegExp("[0-9]"); // Los corchetes indican que se puede buscar cualquier caracter que cumpla dentro de ellos

/**
 * Para buscar caracteres especiales se debe tener en cuenta que algunos caracteres
 * son especiales en las expresiones regulares, por lo que se deben escapar con una barra invertida
 * por ejemplo el punto se debe buscar con \. ya que el punto indica cualquier caracter excepto el salto de linea
 * para buscar el punto se debe escapar con una barra invertida \.
 * Los caracteres especiales son:
 * ! @ # $ % ^ & * ( ) + = _ - { } [ ] : ; " ' ? < > , . | / \ ~ `
 * 
 * Para el caso de -, se debe escapar con una barra invertida ya que indica un rango de caracteres y podria confundirse
 * con un rango de caracteres, por ejemplo [a-z] indica cualquier letra minuscula, si se quiere buscar el guion se debe
 * escapar con una barra invertida \-
 * 
 * Para el caso de ] se debe escapar con una barra invertida ya que indica el fin de un rango de caracteres, por ejemplo
 * [a-z] indica cualquier letra minuscula, si se quiere buscar el corchete se debe escapar con una barra invertida \]
 * 
 * Para el caso de ", se debe escapar con una barra invertida ya que indica el fin de un string, por ejemplo
 * "hola" indica un string, si se quiere buscar el " se debe escapar con una barra invertida \"
 */
const onlySpecialCharacters = new RegExp("[!@#$%^&*()+=_\-{}[\]:;\"'<>|/\\~`]");

/**
 * Para chequear que la longitud sea de al menos 8 caracteres
 * se puede hacer con una expresion regular
 * El punto indica cualquier caracter excepto el salto de linea
 * las llaves indican la cantidad de caracteres que se deben buscar
 * el 8 indica que se deben buscar al menos 8 caracteres
 * si fuera {8,10} indicaria que se deben buscar entre 8 y 10 caracteres
 * si fuera {,10} indicaria que se deben buscar hasta 10 caracteres
 */
const lengthCheckerRegExp = new RegExp("{8,}");


// Si deseas juntar todas las condiciones en una sola funcion puedes hacerlo de la siguiente manera
const passwordChecker = (el) => {
    return /[a-zA-Z0-9!@#$%^&*()+=_\-{}[\]:;"'<>|/\\~`].{8,}/.test(el);
}

console.log(onlyLowerCaseLetters.test("A"));
console.log(onlyLowerUpperCaseLetters.test("1"));