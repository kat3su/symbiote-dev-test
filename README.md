# Symbiote Developer Exercise

This is a response to [Symbiote Developer Exercise](https://symbiote.github.io/developer-exercise/)

## Overview
- Very basic structure with 3 main components: PageList, PageEditor & Login
- Material Design is used to handle layout and basic styling
- `localStorage` is used to save `pages` (1st run will not have any pages)
- user session is currently not being stored and will need to login again after refresh
- Only basic unit test for `authService`
- This is complete in about roughly 3 hours
  - Main structure & functionality: 2 hours
  - Material & Layout: 0.5 hour
  - Testing & Document: 0.5 hour
 
## Framework & Dependencies

- Angular Cli 6.2.2
- Angular Version 6.x
- Angular Material Material

## Demo

Demo: [public/index.html](public/index.html)

## Development Service

Install or upgrade to Angular Cli version 6.x if haven't done so
```
npm -global install @angular/cli@6.2.2 
```

Install dependencies
```
npm install
```

Run dev server
```
ng serve
```

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
