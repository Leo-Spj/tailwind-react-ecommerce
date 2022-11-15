
## Para iniciar este repo:
>Clonarlo y ejecutar:

	npm install
	npm init
	npm start
    
-------------
## GitHub Pages:
Instalar:

	npm i gh-pages 

En el archivo `package.json` agregar justo antes de `dependencies`:
> Colocar en "link_githubPages" :  
> Segun la estructura de este link: https://leo-spj.github.io/ecommerce-react-coderhouse/ 
> : nombre de usuario, github.io, nombre del repositorio github.

	 "homepage": " link_githubPages ",

Y en la primera linea dentro de `Scripts` pegar:

	"predeploy": "npm run build",
	"deploy": "gh-pages -d build",


#### Importante:
Cada vez que quiera **subir nuevos cambios al servidor** de github-pages:

Primero hacer un `push` del proyecto, luego:

	 npm run deploy

-------------
-------------
## OPCIONAL:
-------------
### SASS:

Documentacion oficial [Sass](https://www.npmjs.com/package/sass)

Para trabajar con archivos sass:

	npm i sass

-------------
### Tailwind CSS
La documentacion oficial en [TailwindCss](https://tailwindcss.com/docs/guides/create-react-app)

    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p

En el archivo `tailwind.config.js` colocar solo el `content`

    module.exports = {
    ...
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    ...

En `./src/index.css` agregar:

    @tailwind base;
    @tailwind components;
    @tailwind utilities;

Y luego correr:

    npm run start

-------------
### DaisyUI

La documentacion oficial en [DaisyUI](https://daisyui.com/docs/install/)

Instalar:

    npm i daisyui

Luego agregar en el archivo `tailwind.config.js`:

    module.exports = {
    //...
    plugins: [require("daisyui")],
    }