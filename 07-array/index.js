/**
 * Ejercicio practico en clase
 */

// Pedir al usuario info de un producto como, cuando quiere parar de ingresar info, que ingrese "fin".
// nombre, precio, cantidad.

// Guardar la info en un array de objetos.
// En cada insercion verificar que no hayan espacios ni al principio ni al final.
// Verificar que no hayan espacios entre medio de las palabras.
// Verificar que el nombre no inicie con numeros.

// Obtener el producto mas caro y el mas barato.

// mas barato
// const products = [{
//     name: "product1",
//     price: 100,
// },
// {
//     name: "product2",
//     price: 200,
// },
// {
//     name: "product3",
//     price: 50,
// },
// {
//     name: "product4",
//     price: 300,
// }
// ];
// const theCheapest = products.reduce((acc, el) => {
//     if (el.price < acc) {
//         acc = el.price;
//     }
//     return acc;
// }, 100000);

// const theMostExpensive = products.reduce((acc, el) => {
//     if (el.price > acc) {
//         acc = el.price;
//     }
//     return acc;
// }, 0);

// // Excluir productos con precio menor a 150

// const filteredProducts = products.filter((el) => el.price > 150);

// console.log(products);
// console.log(theCheapest);
// console.log(theMostExpensive);
// console.log(filteredProducts);
// console.log(products);

let arr = []

while (true) {
    alert("Bienvenido al sistema de productos")

    let resp = prompt(`Que quieres hacer?   \n1. Ingresar un producto 
                                            \n2. Ver el producto mas caro 
                                            \n3. Ver el producto mas barato 
                                            \n4. Salir del sistema`);
    switch (resp) {
        case '1':
            let name;
            while (true) {
                name = prompt('Ingrese el nombre del producto');
                const validate = validateProductName(name);
                if (!validate) {
                    console.log("from");
                    continue;
                }
                break;
            }
            let price = prompt('Ingrese el precio del producto');
            let quantity = prompt('Ingrese la cantidad del producto');
            const product = {
                name,
                price: price,
                quantity: quantity
            };
            insertProduct(product);
            break;
        case '2':
            const theMostExpensive = getMostExpensiveProduct();
            alert(theMostExpensive);
            break;
        case '3':
            const theCheapest = getCheapestProduct();
            alert(theCheapest);
            break;
        case '4':
            alert('Gracias por usar nuestro sistema');
            exit();
        default:
            break;
    }
}

function validateProductName(name) {
    if (name.trim() === '' || name[0] === ' ' || name[name.length - 1] === ' ') {
        alert('El nombre no puede tener espacios al principio ni al final');
        return false;
    }
    if (name.includes(' ')) {
        alert('El nombre no puede tener espacios entre medio');
        return false;
    }
    if (!isNaN(name[0])) {
        alert('El nombre no puede iniciar con numeros');
        return false;
    }
    return true
}

function insertProduct(obj) {
    arr.push(obj);
}

function getCheapestProduct() {
    const theCheapest = arr.reduce((acc, el) => {
        if (el.price < acc) {
            acc = el.price;
        }
        return acc;
    }, 100000);
    return theCheapest;
}

function getMostExpensiveProduct() {
    const theMostExpensive = arr.reduce((acc, el) => {
        if (el.price > acc) {
            acc = el.price;
        }
        return acc;
    }, 0);
    return theMostExpensive;
}