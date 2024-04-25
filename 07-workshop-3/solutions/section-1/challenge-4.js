let i = true
const eventList = []
let id = 0;
while (i) {
    // Sistema de gestion de eventos
    const userInput = prompt(`Por favor ingresa una de las siguientes opciones:
                            \n 1. Crear un evento 
                            \n 2. Ver eventos
                            \n 3. Buscar eventos por nombre
                            \n 4. Actualizar evento
                            \n 5. Eliminar evento
                            \n 6. Salir`);
    switch (userInput) {
        case "1":
            const eventName = prompt("Por favor ingresa el nombre del evento: ")
            const eventDate = prompt("Por favor ingresa la fecha del evento (YYYY-MM-DD): ");
            const eventDescription = prompt("Por favor ingresa la descripcion del evento: ");
            const event = Object.assign({}, {
                id: id++, // incrementamos el id
                eventName, // lo mismo que eventName: eventName
                eventDate, // lo mismo que eventDate: eventDate
                eventDescription // lo mismo que eventDescription: eventDescription
            })

            eventList.push(event);
            break;
        case "2":
            eventList.forEach((event, index, arr) => {
                console.log(`Evento ${index + 1}: ${event.eventName} - ${event.eventDate} - ${event.eventDescription}`);
            });
            break;
        case "3":
            const search = prompt("Por favor ingresa el nombre del evento que deseas buscar: ");
            const foundEvents = eventList.filter(event => event.eventName === search);
            if (foundEvents.length === 0) { // 
                console.log("No se encontraron eventos con ese nombre");
                break;
            }
            foundEvents.forEach((event, index) => {
                console.log(`Evento ${index + 1}: ${event.eventName} - ${event.eventDate} - ${event.eventDescription}`);
            });
            break;
        case "4":
            // primero mostramos todos los eventos para visualizar el id
            eventList.forEach((event, index) => {
                console.log(`Evento ${index + 1}: ${event.eventName} - ${event.eventDate} - ${event.eventDescription}`);
            });
            // luego pedimos el id del evento a actualizar
            const eventId = prompt("Por favor ingresa el id del evento que deseas actualizar: ");
            // luego pedimos los nuevos datos
            const eventNameUpdated = prompt("Por favor ingresa el nombre del evento o enter si deseas mantener el mismo: ");
            const eventDateUpdated = prompt("Por favor ingresa la fecha del evento o enter si deseas mantener la misma: ");
            const eventDescriptionUpdated = prompt("Por favor ingresa la descripcion del evento o enter si deseas mantener la misma: ");
            // actualizamos el evento
            if (eventNameUpdated) {
                eventList[eventId - 1].eventName = eventNameUpdated;
            }
            if (eventDateUpdated) {
                eventList[eventId - 1].eventDate = eventDateUpdated;
            }
            if (eventDescriptionUpdated) {
                eventList[eventId - 1].eventDescription = eventDescriptionUpdated;
            }
            break;
        case "5":
            // primero mostramos todos los eventos para visualizar el id
            eventList.forEach((event, index) => {
                console.log(`Evento ${index + 1}: ${event.eventName} - ${event.eventDate} - ${event.eventDescription}`);
            });
            // luego pedimos el id del evento a eliminar
            const eventIdToDelete = prompt("Por favor ingresa el id del evento que deseas eliminar: ");
            // eliminamos el evento
            // eventList = eventList.filter((event, index) => index !== eventIdToDelete - 1);
            eventList.splice(eventIdToDelete - 1, 1);
            break;
        case "6":
            i = false;
            break;
        default:
            break;
    }

}

/**
 * Como funciona el splice para este caso con una estructura de array de objetos
 * 
 * const arr = [{a: 1}, {b: 2}, {c: 3}]
 * arr.splice(1, 1) // Primer parametro es el indice a partir del cual se va a eliminar, 
 * el segundo parametro es la cantidad de elementos a eliminar
 * console.log(arr) // [{a: 1}, {c: 3}]
 */