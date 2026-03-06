# js-ts-react-practices



## react-with-js-projects

```bash
Sivasankar.Thalavai MINGW64 /d/React/react-webpack-app
$ ls

Sivasankar.Thalavai MINGW64 /d/React/react-webpack-app
$ npm init -y
Wrote to D:\React\react-webpack-app\package.json:

{
  "name": "react-webpack-app",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": ""
}




Sivasankar.Thalavai MINGW64 /d/React/react-webpack-app
$ ls
package.json

Sivasankar.Thalavai MINGW64 /d/React/react-webpack-app
$ npm install react react-dom react-router-dom axios

added 30 packages, and audited 31 packages in 3s

7 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

Sivasankar.Thalavai MINGW64 /d/React/react-webpack-app
$ npm install -D webpack webpack-cli webpack-dev-server webpack-merge \
babel-loader @babel/core @babel/preset-env @babel/preset-react \
html-webpack-plugin css-loader style-loader mini-css-extract-plugin \
eslint prettier

added 543 packages, and audited 574 packages in 16s

115 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

Sivasankar.Thalavai MINGW64 /d/React/react-webpack-app
$ mkdir config public src
mkdir src/api src/assets src/components src/features src/hooks src/layouts src/pages src/routes src/store src/utils
mkdir src/assets/images src/assets/styles
mkdir src/components/Button
mkdir src/features/users
mkdir src/features/users/components
mkdir src/features/users/hooks
mkdir src/features/users/services

Sivasankar.Thalavai MINGW64 /d/React/react-webpack-app
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

Sivasankar.Thalavai MINGW64 /d/React/react-webpack-app
$ ls
README.md  config/  node_modules/  package-lock.json  package.json  public/  src/

Sivasankar.Thalavai MINGW64 /d/React/react-webpack-app
$ tree
bash: tree: command not found

Sivasankar.Thalavai MINGW64 /d/React/react-webpack-app
$ npm start

> react-webpack-app@1.0.0 start
> webpack serve --config config/webpack.dev.js

<i> [webpack-dev-server] Project is running at:
<i> [webpack-dev-server] Loopback: http://localhost:8080/, http://[::1]:8080/
<i> [webpack-dev-server] On Your Network (IPv4): http://192.168.1.5:8080/
<i> [webpack-dev-server] Content not from webpack is served from 'D:\React\react-webpack-app\public' directory
asset main.js 56.6 KiB [emitted] [minimized] (name: main) 1 related asset
runtime modules 27.9 KiB 12 modules
orphan modules 36.7 KiB [orphan] 4 modules
cacheable modules 115 KiB
  modules by path ./node_modules/webpack-dev-server/client/ 90.2 KiB
    ./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0....(truncated) 59.1 KiB [built] [code generated]
    ./node_modules/webpack-dev-server/client/utils/log.js 551 bytes [built] [code generated]
    + 2 modules
  modules by path ./node_modules/webpack/hot/*.js 5.56 KiB
    ./node_modules/webpack/hot/dev-server.js 2.33 KiB [built] [code generated]
    ./node_modules/webpack/hot/emitter.js 75 bytes [built] [code generated]
    ./node_modules/webpack/hot/log.js 1.73 KiB [built] [code generated]
    ./node_modules/webpack/hot/log-apply-result.js 1.43 KiB [built] [code generated]
  ./src/index.js 1 bytes [built] [code generated]
  ./node_modules/events/events.js 14.5 KiB [built] [code generated]
  ./node_modules/ansi-html-community/index.js 4.16 KiB [built] [code generated]

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value.
Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/

webpack 5.105.4 compiled with 1 warning in 1575 ms
assets by status 57.3 KiB [cached] 3 assets
Entrypoint main = main.js 792.558e8ed11710a9d8ddb4.hot-update.js
runtime modules 27.9 KiB 12 modules
orphan modules 36.7 KiB [orphan] 4 modules
cacheable modules 115 KiB
  modules by path ./node_modules/webpack-dev-server/client/ 90.2 KiB
    ./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0....(truncated) 59.1 KiB [built] [code generated]
    ./node_modules/webpack-dev-server/client/utils/log.js 551 bytes [built] [code generated]
    + 2 modules
  modules by path ./node_modules/webpack/hot/*.js 5.56 KiB
    ./node_modules/webpack/hot/dev-server.js 2.33 KiB [built] [code generated]
    ./node_modules/webpack/hot/emitter.js 75 bytes [built] [code generated]
    ./node_modules/webpack/hot/log.js 1.73 KiB [built] [code generated]
    ./node_modules/webpack/hot/log-apply-result.js 1.43 KiB [built] [code generated]
  ./src/index.js 216 bytes [built] [code generated] [1 error]
  ./node_modules/events/events.js 14.5 KiB [built] [code generated]
  ./node_modules/ansi-html-community/index.js 4.16 KiB [built] [code generated]

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value.
Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/

ERROR in ./src/index.js 8:12
Module parse failed: Unexpected token (8:12)
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
| const root = createRoot(container);
|
> root.render(<App />);

webpack 5.105.4 compiled with 1 error and 1 warning in 5439 ms
assets by status 57.3 KiB [cached] 3 assets
Entrypoint main = main.js 792.558e8ed11710a9d8ddb4.hot-update.js
runtime modules 27.9 KiB 12 modules
orphan modules 36.7 KiB [orphan] 4 modules
cacheable modules 115 KiB
  modules by path ./node_modules/webpack-dev-server/client/ 90.2 KiB
    ./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0....(truncated) 59.1 KiB [built] [code generated]
    ./node_modules/webpack-dev-server/client/utils/log.js 551 bytes [built] [code generated]
    + 2 modules
  modules by path ./node_modules/webpack/hot/*.js 5.56 KiB
    ./node_modules/webpack/hot/dev-server.js 2.33 KiB [built] [code generated]
    ./node_modules/webpack/hot/emitter.js 75 bytes [built] [code generated]
    ./node_modules/webpack/hot/log.js 1.73 KiB [built] [code generated]
    ./node_modules/webpack/hot/log-apply-result.js 1.43 KiB [built] [code generated]
  ./src/index.js 216 bytes [built] [code generated] [1 error]
  ./node_modules/events/events.js 14.5 KiB [built] [code generated]
  ./node_modules/ansi-html-community/index.js 4.16 KiB [built] [code generated]

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value.
Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/

ERROR in ./src/index.js 8:12
Module parse failed: Unexpected token (8:12)
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
| const root = createRoot(container);
|
> root.render(<App />);

webpack 5.105.4 compiled with 1 error and 1 warning in 1853 ms
<i> [webpack-dev-server] Gracefully shutting down. To force exit, press ^C again. Please wait...





Sivasankar.Thalavai MINGW64 /d/React/react-webpack-app
$ npm install -D @babel/core @babel/preset-env @babel/preset-react babel-loader

up to date, audited 574 packages in 3s

115 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

Sivasankar.Thalavai MINGW64 /d/React/react-webpack-app
$ rm -rf node_modules
rm -rf dist
npm install
npm start

added 573 packages, and audited 574 packages in 10s

115 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

> react-webpack-app@1.0.0 start
> webpack serve --config config/webpack.dev.js

<i> [webpack-dev-server] Project is running at:
<i> [webpack-dev-server] Loopback: http://localhost:3000/, http://[::1]:3000/
<i> [webpack-dev-server] On Your Network (IPv4): http://192.168.1.5:3000/
<i> [webpack-dev-server] Content not from webpack is served from 'D:\React\react-webpack-app\public' directory
<i> [webpack-dev-server] 404s will fallback to '/index.html'
<i> [webpack-dev-middleware] wait until bundle finished: /
asset bundle.080004798ee4694a847d.js 1.26 MiB [emitted] [immutable] (name: main) 1 related asset
asset index.html 219 bytes [emitted]
runtime modules 28.1 KiB 13 modules
modules by path ./node_modules/ 1.2 MiB
  modules by path ./node_modules/webpack-dev-server/client/ 90.2 KiB 8 modules
  modules by path ./node_modules/webpack/hot/*.js 5.56 KiB 4 modules
  modules by path ./node_modules/react-dom/ 1.04 MiB 4 modules
  modules by path ./node_modules/react/ 46.3 KiB 2 modules
  modules by path ./node_modules/scheduler/ 12 KiB
    ./node_modules/scheduler/index.js 194 bytes [built] [code generated]
    ./node_modules/scheduler/cjs/scheduler.development.js 11.9 KiB [built] [code generated]
  ./node_modules/events/events.js 14.5 KiB [built] [code generated]
  ./node_modules/ansi-html-community/index.js 4.16 KiB [built] [code generated]
modules by path ./src/ 432 bytes
  ./src/index.js 239 bytes [built] [code generated]
  ./src/App.jsx 193 bytes [built] [code generated]
webpack 5.105.4 compiled successfully in 5663 ms

```

<img width="1187" height="307" alt="image" src="https://github.com/user-attachments/assets/8280082f-a505-4e5a-9b14-f962d4d0d91f" />

-----------------

