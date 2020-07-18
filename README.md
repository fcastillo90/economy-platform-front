# Economy Platform - Francisco Castillo

### `ReactJS, Docker multistage, Eslint, Prettier, path alias, Husky, Jest, axios, helpers, entre otros`

## Scripts Disponibles
### `docker-compose -f docker-compose-local.yml up --force-recreate`
### `yarn start`
### `yarn test`


## Para iniciar la aplicación, debes:
<br /> `yarn install`
<br /> `docker-compose -f docker-compose-local.yml up --force-recreate`
<br /> `Abrir en tu navegador [http://localhost:8082](http://localhost:8082)`

ó

<br /> `yarn install`
<br /> `yarn start`
<br /> `Abrir en tu navegador [http://localhost:3000](http://localhost:3000)`

## Para iniciar las pruebas, debes:
<br /> `yarn test`

## Estructura de archivos:
* Docker multistage separando la etapa de desarrollo, build y servidor nginx, que permite así tener un contenedor mucho más atómico (menos peso) y ambientes más controlados.
* Husky configurado para evitar commits con errores de código.
* ESLint y Prettier para mejores prácticas.
* Direcciones con ALIAS para mejor legibilidad de código.
* URL en archivo .env para gestionar fácilmente las variables de los distintos ambientes (dev, QA, prod) de la plataforma.
* Se hace un ruteo de 2 niveles para mayor visión y escalabilidad de la plataforma (App.js y los index.js de cada contesto Ej: platform).
* Se divide los componentes transversales y comunes a la plataforma en la carpeta components y las vistas en Views.
* Las vistas en la carpeta views están divididas por contexto, en este caso hay uno solo que es el platform. En él se sigue el estilo de modelo, vista, controlador haciendo una separación entre un componente principal que maneja la lógica y subcomponentes "brutos" que reciben toda la data por props.
* Cada contexto de vista tiene su propio set de pruebas, así como estilos y enrutador.
* Se tiene carpetas de constantes, validaciones y utilidades comúnmente utilizadas a lo largo de toda la aplicación.
* La carpeta services es donde almacenamos una función helper centralizada de axios, el constructor de URL y las funciones comunes a ejecutar en caso del request tener éxito, fallo o en proceso.
* Los componentes comunes están divididos en carpetas distintas según contexto, conteniendo así un archivo exportador principal (index) que hace disponible de manera sencilla cada uno de sus componentes internos.

```
.
├── App.js
├── components
│   ├── cards
│   │   ├── Cards.test.js
│   │   ├── InfoCard.js
│   │   ├── index.js
│   │   └── styleJss.js
│   ├── charts
│   │   ├── Charts.test.js
│   │   ├── LineChart.js
│   │   └── index.js
│   ├── icons
│   │   ├── Icons.test.js
│   │   ├── React
│   │   │   ├── Logo.js
│   │   │   └── index.js
│   │   ├── index.js
│   │   └── styleJss.js
│   ├── inputs
│   │   ├── Input.test.js
│   │   ├── SearchInput.js
│   │   ├── index.js
│   │   └── styleJss.js
│   ├── navbar
│   │   ├── Navbar.js
│   │   ├── Navbar.test.js
│   │   ├── index.js
│   │   └── styleJss.js
│   └── navigation
│       ├── MainNavbar.js
│       ├── Navigation.test.js
│       └── index.js
├── constants
│   ├── index.js
│   └── routes.js
├── index.js
├── serviceWorker.js
├── services
│   ├── Common.js
│   ├── Settings.js
│   └── index.js
├── setupTests.js
├── utils
│   ├── ThemeContext.js
│   ├── index.js
│   └── paletteConfig.js
├── validations
│   └── index.js
└── views
    ├── Views.test.js
    ├── index.js
    └── platform
        ├── Platform.test.js
        ├── components
        │   ├── CardsResume.js
        │   ├── DateQuery.js
        │   └── HistoricalGraph.js
        ├── containers
        │   ├── About.js
        │   ├── Dashboard.js
        │   ├── Graphics.js
        │   └── Search.js
        ├── index.js
        ├── model.js
        └── styleJss.js
```