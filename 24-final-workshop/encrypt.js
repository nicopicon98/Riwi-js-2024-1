import CryptoJS from 'crypto-js';

// Función para encriptar
export function encryptData(data, key = "123") {
  return CryptoJS.AES.encrypt(data, key).toString();
}

// Función para desencriptar
export function decryptData(encryptedData, key = "123") {
  const bytes = CryptoJS.AES.decrypt(encryptedData, key);
  return bytes.toString(CryptoJS.enc.Utf8);
}

// Ejemplo de uso
// const secretKey = 'supersecreto';
// const originalData = 'Hola, mundo!';
// const encryptedData = encryptData(originalData, secretKey);
// console.log('Dato encriptado:', encryptedData);

// const decryptedData = decryptData(encryptedData, secretKey);
// console.log('Dato desencriptado:', decryptedData);

// // Comparar datos encriptados
// if (encryptData('dato1', secretKey) === encryptData('dato1', secretKey)) {
//   console.log('Los datos son iguales');
// } else {
//   console.log('Los datos son diferentes');
// }
