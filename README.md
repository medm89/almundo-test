# Almundo

Este repositorio tiene como fin compartir el desarrollo solicitado.

## Como empezar

Inicialmente se debe clonar el repositorio de git https://github.com/medm89/almundo-test.git a traves de la instruccion git clone, en el encontra 2 carpetas almundo y api-rest la primera contiene el desarrollo de la pagina la cual muestra los hoteles y realiza los filtrados, la segunda carpeta api-rest contiene el servicio rest el cual consume el archivo data.json y realiza los filtrados para las diferentes peticiones que soporta.

### Prerequisitos

Que debes tener instalado: 
NodeJs el cual funciona como servidor de aplicaciones y en la cual realizamos la Api y funciona como servidor Web 
Npm para manejar las dependencias que deban ser instaladas.

(*) son opcionales  Allow-Control-Allow-Origin lo utilice debido a que al consumir intentar consumir la Api desde angular el navegador no permitia que se ejecutara.

Nodemon lo utilice para evitar tener que bajar y subir el servicio cada que realizara un cambio en mi proyecto.

```
NodeJs       
Npm          
Angular @CLI 
*Allow-Control-Allow-Origin plugin Chrome
*Nodemon
```

### Instalando

Despues de tener los 2 directorios clonados debemos ejecutar los siguientes comandos.

Dentro de almundo, Debido al peso de la carpeta node_component esta no se subio al repositorio por tanto antes de intentar correr el proyecto se debe instalar los paquetes.

```
npm install
```

despues de instalar los paquetes ya puede funcionar la aplicación

```
npm start
```

Dentro de la carpeta api-rest de debe instalar primero las depdendencias body-parse, express y nodemon

```
npm i body-parse --save && npm i express --save && npm i nodemon --save
```

Posterior se podra ejecutar el aplicativo con los comandos 

```
node index.js o npm start
```


## Autor
* **Martin Diaz** 

