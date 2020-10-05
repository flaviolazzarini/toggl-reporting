# TogglReporting

This project is a hybrid Desktop application based on electron. The web application is written in Angular.

## Development

Run `npm start` for to develop te electron app. Navigate to `http://localhost:4200/` to see the web version. The angular part will automatically reload if you change any of the source files. If you change anything on the electron part you will have to stop and run again `npm start`.

## Import of electron or Node.js libraries in Angular
See `core/services/electron/electron.service.ts` to see how imports should be done.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
