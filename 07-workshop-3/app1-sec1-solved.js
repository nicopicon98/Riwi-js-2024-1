// Generador de nombres de usuario y correos electronicos

let flag = true;
const domainName = "myDomain.com"
const users = {}
while (flag) {
    const name = prompt("Por favor ingresa tu nombre completo: ").toLowerCase()
    if (!name) {
        console.log("No se aceptan entradas vacias")
        continue;
    }
    const splitFullName = name.split(" ")
    if (splitFullName.length > 2) {
        console.log("Por favor ingresa un nombre y un apellido valido")
        continue; // jump to the next iteration (cycle)
    }
    // best scenario
    const firstThreeName = splitFullName[0].slice(0, 3);
    const firstThreeLastName = splitFullName[1].slice(0, 3);
    let userName = `${firstThreeName}${firstThreeLastName}`;
    let email = `${userName}@${domainName}`

    const matches = checkUnique(userName) // returns count matches
    if (matches > 0) {
        userName += matches;
    }
    console.log(userName);
    Object.assign(users, {
        [userName]: email
    });
}

// I need a function that returns the last repeated number
function checkUnique(username) {
    // Obtain user names
    const userKeys = Object.keys(users);
    // iterate over usernames to check uniqueness
    let matches = 0
    userKeys.forEach(e => {
        /*
        if(e.startsWith(username)){
            console.log("it entered")
            matches++
        }
        */

        let semiMatch = ""
        for (let i = 0; i < e.length; i++) {
            semiMatch += e[i];
            if (semiMatch === username) {
                matches++
            }
        }

    })
    return matches;
}