let wantsToGenerateAnotherUser = true
const domainName = "myDomain.com"
const obj = {

}
while (wantsToGenerateAnotherUser) {
    const userInput = prompt("Bievenido, que deseas hacer? \n1. Ingresar un usuario \n2. Salir")
    if (userInput === "2") {
        wantsToGenerateAnotherUser = false;
    } else {
        const userFullName = prompt("Ingresa tu nombre completo").toLowerCase()
        const splitFullName = userFullName.split(" ")

        // validate string length
        if (splitFullName.length !== 2) {
            console.log("Por favor ingresa un nombre valido")
        } else {
            const nameThreeFirstLetters = splitFullName[0].slice(0, 3)
            const lastNameThreeFirstLetters = splitFullName[1].slice(0, 3)
            let baseUsername = `${nameThreeFirstLetters}${lastNameThreeFirstLetters}`
            const userKeys = Object.keys(obj) // ["nicpic", "juaper"]
            let counter = 0
            userKeys.forEach(username => {
                let semiMatch = ""
                for (let i = 0; i < username.length; i++) {
                    semiMatch = semiMatch + username[i];
                    if (semiMatch === baseUsername) { // nicpic === nicpic
                        counter++
                    }
                }
            })

            if (counter) {
                baseUsername = baseUsername + counter
            }
            const userEmail = `${baseUsername}@${domainName}` //namape@myDomain.com
            Object.assign(obj, {
                [baseUsername]: userEmail
            })
            console.log(obj);
        }
    }
}