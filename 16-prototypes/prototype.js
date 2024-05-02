// Funcion constructora
function UsuarioBase(nombre, email) {
    this.nombre = nombre
    this.email = email
}

UsuarioBase.prototype.informacion = function () {
    return `Nombre: ${this.nombre}, Email: ${this.email}`
}

// function Administrador(nombre, email){
//     UsuarioBase.call(this,nombre,email)
// }

function Administrador(nombre, email) {
    this.super = UsuarioBase
    this.super(nombre, email)
}

Administrador.prototype = Object.create(UsuarioBase.prototype)
Administrador.prototype.constructor = Administrador

Administrador.prototype.accesoTotal = function () {
    return `El usuario ${this.nombre} tiene acceso de administrador`
}

function Vendedor(nombre, email) {
    UsuarioBase.call(this, nombre, email)
}
// function Vendedor () {

// }

Vendedor.prototype = Object.create(UsuarioBase.prototype)
Vendedor.prototype.constructor = Vendedor

Vendedor.prototype.accesoVendedor = function () {
    return `El usuario ${this.nombre} tiene acceso de vendedor`
}

let admin = new Administrador("Nicolas", "nicopicon@riwi.io")
let vendedor = new Vendedor("Daniela", "daniela@riwi.io")

console.log(admin.informacion())
console.log(vendedor.informacion())

console.log(admin.accesoTotal())
console.log(vendedor.accesoVendedor())