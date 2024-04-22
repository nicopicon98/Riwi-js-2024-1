// Validador de correos electronicos

const email = prompt("Por favor ingresa tu correo electronico: ");

const checkHasGotAt = (el) => {
    return el.includes("@");
}

const checkHasGotDotRightAfterAt = (el) => {
    // first check if it has an @
    if (!checkHasGotAt(el)) return false;
    // then check if it has a dot right after the @
    return el.split("@")[1].includes(".");
}

const checkAtAndDotAreNothTogether = (el) => {
    // first check if it has an @
    if (!checkHasGotAt(el)) return false;
    // then check if it has a dot right after the @
    return !el.includes("@."); // if it includes @. it means they are together
}

const checkNotEmptySpaces = (el) => {
    return !el.includes(" "); // if it includes a space, it means it has empty spaces
}