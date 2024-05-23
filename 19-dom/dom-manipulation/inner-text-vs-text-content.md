# innerText vs textContent

- **innerText** Retorna el texto visible de un nodo y sus descendientes. 
- **textContent** retorna todo el texto de un nodo y sus descendientes, incluyendo los elementos HTML.

## Ejemplo con innerText

```html
<!DOCTYPE html>
<html>
<body>

<div id="myDiv">
  <p>This is a <span>paragraph</span> with some text.</p>
</div>

<p>Click the button to display the innerText of the div element.</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {
  var x = document.getElementById("myDiv").innerText;
  document.getElementById("demo").innerHTML = x;
}
</script>

</body>
</html>
```

## Resultado

```plaintext
This is a paragraph with some text.
```

## Nota
Entendamos que sucedio en el ejemplo anterior:
- El texto visible de un nodo y sus descendientes es: "This is a paragraph with some text."
- El texto de un nodo y sus descendientes, incluyendo los elementos HTML es: "This is a <span>paragraph</span> with some text."

## Ejemplo con textContent

```html
<!DOCTYPE html>
<html>
<body>

<div id="myDiv">
  <p>This is a <span>paragraph</span> with some text.</p>
</div>

<p>Click the button to display the textContent of the div element.</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {
  var x = document.getElementById("myDiv").textContent;
  document.getElementById("demo").innerHTML = x;
}

</script>

</body>

</html>
```

## Resultado

```plaintext
This is a paragraph with some text.
```

## Nota
Entendamos que sucedio en el ejemplo anterior:
- El texto visible de un nodo y sus descendientes es: "This is a paragraph with some text."
- El texto de un nodo y sus descendientes, incluyendo los elementos HTML es: "This is a <span>paragraph</span> with some text."

Entonces, ¿Cuál es la diferencia entre innerText y textContent?

La diferencia es que innerText representa el "texto visible" de un nodo y sus descendientes, mientras que textContent representa el "texto completo" de un nodo y sus descendientes. Además, innerText no incluye los elementos HTML, mientras que textContent incluye los elementos HTML. Y por ultimo, innerText esta sincronizado con el estilo del nodo, mientras que textContent no esta sincronizado con el estilo del nodo.

Por ejemplo:

```html
<!DOCTYPE html>
<html>
<head>
    <title>innerText vs textContent</title>
    <style>
        .hidden {
            display: none;
        }
    </style>
</head>
<body>
    <div id="myDiv">
        This is some <span class="hidden">hidden</span> text.
    </div>

    <p>innerText: <span id="innerText"></span></p>
    <p>textContent: <span id="textContent"></span></p>

    <script>
        // Usando innerText
        const innerTextContent = document.getElementById("myDiv").innerText;
        document.getElementById("innerText").textContent = innerTextContent;

        // Usando textContent
        const textContentContent = document.getElementById("myDiv").textContent;
        document.getElementById("textContent").textContent = textContentContent;
    </script>
</body>
</html>
```

Del ejemplo anterior, podemos ver que el texto visible de un nodo y sus descendientes es "This is some text.", mientras que el texto completo de un nodo y sus descendientes es "This is some hidden text.".