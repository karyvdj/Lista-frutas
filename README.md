# Ejercicio lista de frutas.
## HTML
Se crea un archivo nombrado index.html. Este archivo se divide en dos partes el _**head**_ y el _**body**_.

### _Head_

Dentro de la etiqueta **head** se coloca la siguiente etiqueta que sirve para codoficar todos los caracteres en el HTML:

```javascript
  <meta charset="utf-8">
```

La etiqueta `<style>` nos permite poner estilo a otros atributos como color, tipografía, alinear los textos o contenidos, fondos, etc. Por ejemplo:

```javascript
<style>
    body {
      text-align: center;
      background: url(img/fondo.png);
      color : #0D276E;
      font-family: 'Annie Use Your Telescope', cursive;
    }
    </style>
```
Dentro de esta etiqueta tambien se enzalo una imagen para el fondo que se encuentra dentro de una carpeta donde esta el index.html y para la tipografia esta un link que aparece dentro de la pagina de [google font](https://fonts.google.com/) como este:

```javascript
<link href="https://fonts.googleapis.com/css?family=Annie+Use+Your+Telescope" rel="stylesheet">
```
Por ultimo para darle estilo al boton recurri a esta pagina [CSS Button Generator](http://css3buttongenerator.com/) y para consultar los colores en hexadecimalcomplemente con esta pagina [Códigos de color HTML]( http://htmlcolorcodes.com/es/).

### _Body_

Dentro de **body** llame al archivo .js con la etiqueta `<script>` seguido de src.
```javascript
  <script src= "js/funcion_lista.js"></script>
```
Despues esta la etiqueta de `<h1>` para el encabezado junto con una etiqueta para cambiar el tamaño de la tipografía.
```javascript
   <h1> <font size=50>La frutería </font></h1>
```
Los `<div>` se ocuparon para definir los bloques de contenido, aqui son tres secciones.

En el primero tenemos las siguientes etiquetas:

 * `<p>` para parrafo
 * `<strong>` para resltar en bold partes del texto
 * `<br>` que es un salto de línea.

Segunda seccion esta un imagen enlazada con atributos de alinear y de tamaño deacuerdo a un porcentaje, como se muestra abajo:
```javascript
   <img class="centrar" src="img/fruta_img.png" width="60%">
```
Por ultimo en el tercer bloque esta la lista ordenada de las frutas  con la etiqueta `<h2>` ponemos un subtitulo. Despues para comenzar una lista ordenada se coloca la etiqueta `<ol>` y como el ejercicio pide que el usuario ingrese un dato se le añade el atributo de **id** para que en el archivo javascript pueda leer el dato que se ingreso y se coloque en la lista ordenada, dentro de la etiqueta se coloca `<li>` para que enliste esos datos.

En este bloque tambien se encuentra el `<input>` que sirve para que el ususrio ingrese datos, se le da un atributo de **placeholder** que nos añade un texto dentro de la casilla que indica que ahi se escribe el dato, el **id** que colocamos aqui es para que tengamos la fruta que ingreso el usuario.
```javascript
 <input placeholder="¿Qué fruta quieres?" id="agregarFruta" type="text" required/>
```

Por ultimo tenemos el boton que agragara la fruta a la lista y llamara la funcion del javascript al darle click.
```javascript
<button type="button" onclick="listaFruta()"> AGREGAR </button>
```

## Javascript

En este archivo estara la funcion que hara que se agregue la fruta a la lista ordenada. El codigo es el siguiente:

```javascript
  var enlista = [];
function listaFruta(){
  var añadirFruta = document.getElementById('agregarFruta').value;
  if (añadirFruta != ""){
    document.getElementById("listaOrdenada").innerHTML += "<li>" + añadirFruta + "</li>";
    enlista.push(añadirFruta);
  }
}
```
Cree una variable global **enLista**  de un arreglo vacío, para almacenar los datos, aunque no parece ser necesria porque aun sin este arreglo y el metodo **.push** funciona.

La funcion la nombre como **listaFruta** dentro de ella esta una variable local que se le asigna el valor que ingresa el usuario con en el input del html, con [document.getElementById('').value](https://www.w3schools.com/jsref/prop_text_value.asp).

Despues se crea un **if** con la condicion de que el dato que se ingrese no sea distinto aun string, entonces imprime en el html en la lista ordenada el dato que se ingreso por eso se concatena la etiqueta **li** mas la fruta añadida.
