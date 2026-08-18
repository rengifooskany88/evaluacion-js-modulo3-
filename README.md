# Informe – Evaluación Módulo 3

## ¿Qué hace tu página?
La página sirve como interfaz de bienvenida y contacto para el negocio "TecnoServicios Machine". Permite que un cliente potencial ingrese su nombre, reciba un saludo personalizado generado dinámicamente mediante JavaScript, y visualice la cantidad de caracteres de su nombre ingresado.

## ¿Qué aprendiste al hacerla?
Aprendí a integrar correctamente archivos externos (CSS y JS) en un documento HTML, a manipular el DOM para actualizar contenido en tiempo real según la interacción del usuario (eventos click y teclado) y a estructurar lógica básica de validación.

## ¿Qué estructuras de JavaScript usaste?
* **Variables:** Uso de `const` para capturar elementos del DOM.
* **Eventos:** Uso de `addEventListener` para gestionar clics y la tecla "Enter".
* **Condicionales:** Estructura `if / else` para validar si el campo de texto está vacío.
* **Funciones:** Creación de una función reutilizable para procesar el saludo.
* **Manipulación de texto:** Uso de `textContent` y propiedades de cadena como `length` y `trim()`.

## ¿Qué parte te costó más?
Lo que más tiempo me tomó fue asegurar que el código JavaScript se ejecutara correctamente después de que el DOM cargara completamente, utilizando `DOMContentLoaded` para evitar errores de referencia de elementos.

## ¿Qué mejorarías si tuvieras más tiempo?
Mejoraría la interfaz añadiendo una validación más robusta, integraría un formulario de contacto real que envíe datos a un servidor, y añadiría animaciones CSS para que el saludo aparezca de forma más fluida en lugar de ser estático.
