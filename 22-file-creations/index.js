const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, 'logs.json')
const myMessage = {
    name: "my name",
    date: Date.now()
}

fs.appendFile(filePath, JSON.stringify(myMessage), (error) => {
    if (error) {
        console.log("hubo un error");
        throw new Error("Error inesperado", error)
    } else {
        console.log("se registro correctamente");
    }
})