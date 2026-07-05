# Cómo agregar fotos de los ejercicios

Cada ejercicio busca automáticamente una imagen en:

```
img/dia{N}/{nombre-del-ejercicio-en-minusculas-con-guiones}.jpg
```

Por ejemplo, para "Hip Thrust en máquina" del Día 1, la app busca:

```
img/dia1/hip-thrust-en-maquina.jpg
```

Si el archivo no existe, la tarjeta simplemente muestra un ícono de
cámara — no rompe nada. Basta con guardar la foto con el nombre correcto
en la carpeta del día correspondiente y recargar la página.

Formato recomendado: `.jpg`, orientación cuadrada o 4:3, menos de 500KB
para que la página cargue rápido en GitHub Pages.

### Videos de YouTube

Por defecto, cada ejercicio tiene un botón "Buscar video" que abre una
búsqueda de YouTube con el nombre del ejercicio. Si quieres dejar un
video específico ya elegido, abre `js/app.js`, busca el ejercicio dentro
del objeto `RUTINA` y cambia:

```js
video: null
```

por el ID del video (lo que viene después de `v=` en la URL de YouTube):

```js
video: "dQw4w9WgXcQ"
```
