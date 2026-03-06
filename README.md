# js-ts-react-practices



## react-with-js-projects

```
react-webpack-app
│
├── config
│   ├── webpack.common.js
│   ├── webpack.dev.js
│   ├── webpack.prod.js
│
├── public
│   ├── index.html
│   ├── favicon.ico
│
├── src
│   ├── api
│   │   └── axiosClient.js
│
│   ├── assets
│   │   ├── images
│   │   └── styles
│
│   ├── components
│   │   └── Button
│   │       ├── Button.jsx
│   │       ├── Button.css
│   │       └── index.js
│
│   ├── features
│   │   └── users
│   │       ├── components
│   │       ├── hooks
│   │       ├── services
│   │       └── usersSlice.js
│
│   ├── hooks
│   │   └── useAuth.js
│
│   ├── layouts
│   │   └── MainLayout.jsx
│
│   ├── pages
│   │   ├── Home.jsx
│   │   └── Login.jsx
│
│   ├── routes
│   │   └── AppRoutes.jsx
│
│   ├── store
│   │   ├── rootReducer.js
│   │   └── store.js
│
│   ├── utils
│   │   └── constants.js
│
│   ├── App.jsx
│   └── index.js
│
├── .babelrc
├── .eslintrc.js
├── .prettierrc
├── package.json
└── README.md
```

------------

```bash

s2tha@thalasi-windows MINGW64 /d/SivasankarThalavai
$ mkdir React

s2tha@thalasi-windows MINGW64 /d/SivasankarThalavai
$ cd React/

s2tha@thalasi-windows MINGW64 /d/SivasankarThalavai/React
$ mkdir react-webpack-app
cd react-webpack-app

s2tha@thalasi-windows MINGW64 /d/SivasankarThalavai/React/react-webpack-app
$ npm init -y
Wrote to D:\SivasankarThalavai\React\react-webpack-app\package.json:

{
  "name": "react-webpack-app",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}




s2tha@thalasi-windows MINGW64 /d/SivasankarThalavai/React/react-webpack-app
$ npm install react react-dom react-router-dom axios

added 30 packages, and audited 31 packages in 3s

7 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

s2tha@thalasi-windows MINGW64 /d/SivasankarThalavai/React/react-webpack-app
$ npm install -D webpack webpack-cli webpack-dev-server webpack-merge \
babel-loader @babel/core @babel/preset-env @babel/preset-react \
html-webpack-plugin css-loader style-loader mini-css-extract-plugin \
eslint prettier

added 543 packages, and audited 574 packages in 19s

115 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

s2tha@thalasi-windows MINGW64 /d/SivasankarThalavai/React/react-webpack-app
$ mkdir config public src
mkdir src/api src/assets src/components src/features src/hooks src/layouts src/pages src/routes src/store src/utils
mkdir src/assets/images src/assets/styles
mkdir src/components/Button
mkdir src/features/users
mkdir src/features/users/components
mkdir src/features/users/hooks
mkdir src/features/users/services

s2tha@thalasi-windows MINGW64 /d/SivasankarThalavai/React/react-webpack-app
$ touch config/webpack.common.js
touch config/webpack.dev.js
touch config/webpack.prod.js

touch public/index.html
touch public/favicon.ico

touch src/api/axiosClient.js

touch src/components/Button/Button.jsx
touch src/components/Button/Button.css
touch src/components/Button/index.js

touch src/features/users/usersSlice.js

touch src/hooks/useAuth.js
touch src/layouts/MainLayout.jsx

touch src/pages/Home.jsx
touch src/pages/Login.jsx

touch src/routes/AppRoutes.jsx

touch src/store/rootReducer.js
touch src/store/store.js

touch src/utils/constants.js

touch src/App.jsx
touch src/index.js

touch .babelrc
touch .eslintrc.js
touch .prettierrc
touch README.md

s2tha@thalasi-windows MINGW64 /d/SivasankarThalavai/React/react-webpack-app


```
-----------------------

```
s2tha@thalasi-windows MINGW64 /d/SivasankarThalavai/React/react-webpack-app
$ npm install -D html-webpack-plugin

up to date, audited 574 packages in 1s

115 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

s2tha@thalasi-windows MINGW64 /d/SivasankarThalavai/React/react-webpack-app
$ rm -rf node_modules package-lock.json
npm install
npm start

added 573 packages, and audited 574 packages in 17s

115 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

> react-webpack-app@1.0.0 start
> webpack serve --config config/webpack.dev.js

<i> [webpack-dev-server] Project is running at:
<i> [webpack-dev-server] Loopback: http://localhost:3000/, http://[::1]:3000/
<i> [webpack-dev-server] On Your Network (IPv4): http://172.26.208.1:3000/
<i> [webpack-dev-server] Content not from webpack is served from './dist' directory
<i> [webpack-dev-server] 404s will fallback to '/index.html'
<i> [webpack-dev-middleware] wait until bundle finished: /
asset bundle.5a54f830d7d504f5b3d8.js 1.27 MiB [emitted] [immutable] (name: main) 1 related asset
asset index.html 229 bytes [emitted]
runtime modules 28.1 KiB 13 modules
modules by path ./node_modules/ 1.22 MiB
  modules by path ./node_modules/webpack-dev-server/client/ 90.2 KiB 8 modules
  modules by path ./node_modules/webpack/hot/*.js 5.56 KiB 4 modules
  modules by path ./node_modules/react/ 58.7 KiB 4 modules
  modules by path ./node_modules/react-dom/ 1.04 MiB 4 modules
  modules by path ./node_modules/scheduler/ 12 KiB
    ./node_modules/scheduler/index.js 194 bytes [built] [code generated]
    ./node_modules/scheduler/cjs/scheduler.development.js 11.9 KiB [built] [code generated]
  ./node_modules/events/events.js 14.5 KiB [built] [code generated]
  ./node_modules/ansi-html-community/index.js 4.16 KiB [built] [code generated]
modules by path ./src/ 515 bytes
  ./src/index.js 271 bytes [built] [code generated]
  ./src/App.jsx 244 bytes [built] [code generated]
webpack 5.105.4 compiled successfully in 1460 ms

```

<img width="1187" height="307" alt="image" src="https://github.com/user-attachments/assets/8280082f-a505-4e5a-9b14-f962d4d0d91f" />

-----------------

