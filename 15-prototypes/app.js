/**
 * Prototypes
 */

const obj = {
    name: 'Juan',
    age: 30
}

const proto = {
    country: 'Colombia'
}

// 1. Que son los prototypes
// 2. Como podemos crear un prototype
Object.setPrototypeOf(obj, proto)
// 3. Como podemos acceder a un prototype
    // 3.1. Como podemos acceder a las propiedades de un prototype
    console.log(obj.country)
    // 3.2. Como podemos acceder a los metodos de un prototype
    proto.hello = () => {
        console.log('Hello')
    }
    obj.hello()
// 4. Como podemos modificar un prototype
    proto.country = 'Mexico'
    console.log(obj.country)
// 5. Como podemos desenlazar un prototype
    Object.setPrototypeOf(obj, null) // Elimina la referencia al prototype
    console.log(obj.country)
