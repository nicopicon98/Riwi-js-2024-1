# Event Propagation

Entendamos este concepto como el viaje, o la propagacion, de un evento a traves de los elementos ancestros de un elemento objetivo. En otras palabras, cuando un evento es disparado en un elemento, este evento se propaga a traves de los elementos ancestros de este elemento (fase de captura) y luego se propaga de vuelta a traves de los elementos ancestros (fase de burbujeo).

## Fases de propagacion de eventos

### Captura

En la fase de captura, el evento se propaga desde el elemento raiz (document) hasta el elemento objetivo. En esta fase, el evento se propaga a traves de los elementos ancestros del elemento objetivo.

### Objetivo

En la fase objetivo, el evento llega al elemento objetivo.

### Burbujeo

En la fase de burbujeo, el evento se propaga desde el elemento objetivo hasta el elemento raiz (document). En esta fase, el evento se propaga de vuelta a traves de los elementos ancestros del elemento objetivo.