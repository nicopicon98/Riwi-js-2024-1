const validator1 = (msg) => {
    return msg + " (validated 1rst option)"
}

const validator2 = (msg) => {
    return msg + " (validated 2nd option)"
}

const defaultValidator = (msg) => {
    return msg + " (default validation)"
}

export { validator1, validator2 };
export default defaultValidator;