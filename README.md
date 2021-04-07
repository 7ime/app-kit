# React Redux Typescript Template

Starter Template for Frontend applications

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

For running this application you need to have:
* [NodeJs](https://nodejs.org/en/)

### Installing
```
npm install
```

### Run application
```
npm run start
```

### Deploy application
```
npm run build
```

### Run tests
```
npm run test
```

### Run storybook
```
npm run storybook
```

### Deploy storybook
```
npm run build-storybook
```

### Ecosystem

* [TypeScript](https://typescriptlang.org/) - primary Language.
* [React.js](https://reactjs.org/) - library for building user interfaces.
* [Redux](https://redux.js.org/) - managing app state.
* [Redux toolkit](https://redux-toolkit.js.org/) - the official, opinionated, batteries-included toolset for efficient Redux development.
* [Redux saga](https://redux-saga.js.org/) - library that aims to make application side effects.
* [Reselect](https://github.com/reduxjs/reselect) - simple “selector” library for Redux.
* [React router](https://reactrouter.com/) - collection of navigational components.
* [Webpack](https://webpack.js.org/) - is used to compile JavaScript modules.
* [Babel](https://babeljs.io/) - to be able to use a new generation of javascript.
* [ESlint](https://eslint.org/) - linting code.
* [Jest](https://jestjs.io/) - testing Framework.
* [Redux saga test plan](https://github.com/jfairbank/redux-saga-test-plan) - makes testing sagas a breeze.
* [Axios](https://github.com/axios/axios) - promise based HTTP client for the browser and node.js.
* [Axios mock adapter](https://github.com/ctimmerm/axios-mock-adapter) - allows to easily mock requests.
* [Lodash](https://lodash.com/) - a modern JavaScript utility library delivering modularity, performance & extras.
* [I18next](https://www.i18next.com/) - internationalization-framework.
* [CSS modules](https://github.com/css-modules/css-modules) - to solve the css class namespace problem.
* [Sass](https://sass-lang.com/) - CSS with superpowers.
* [Storybook](https://storybook.js.org/) - is an open source tool for developing UI components in isolation.
* [React detect device](https://github.com/duskload/react-device-detect) - detect device.
* [Classnames](https://github.com/JedWatson/classnames) - a simple JavaScript utility for conditionally joining classNames together.
* [Country flags icons](https://gitlab.com/catamphetamine/country-flag-icons) - vector country flag icons.
* [Libphonenumber js](https://github.com/catamphetamine/libphonenumber-js) - a simpler and smaller rewrite of Google Android's libphonenumber library in javascript.
* [React helmet](https://github.com/nfl/react-helmet) - this reusable React component will manage all of your changes to the document head.
* [React hook form](https://react-hook-form.com/) - performant, flexible and extensible forms with easy-to-use validation.
* [React number format](https://github.com/s-yadav/react-number-format) - react component to format number in an input or as a text.
* [React transition group](https://reactcommunity.org/react-transition-group/) - exposes simple components useful for defining entering and exiting transitions.
* [Yup](https://github.com/jquense/yup) - is a JavaScript schema builder for value parsing and validation.
* [React Material UI](https://material-ui.com/) - react components for faster and easier web development
* [React Calendar](https://github.com/wojtekmaj/react-calendar) - ultimate calendar for your React app.

### Testing
##### Test files are created next to files of components, functions, and classes

- For components
```
    button
        * index.tsx
        * index.test.tsx
```

- For functions or classes
```
    invariant
        * index.ts
        * index.test.ts
```

### Storybook
##### Stories files are created next to files of components
```
    button
        * index.tsx
        * index.stories.tsx
```

### Folder structure

* .github
    * workflows - for automated process on github
* .storybook - setting up storybook
* configs - configuration files for webpack, jest
* dist - files of the production version of the app
* static-storybook - files of the production version of the storybook
* src - application code
    * \__mocks__ - for mocks
    * \__tests__ - for tests
    * api
        * config - configuring for the api
        * fetcher - implementation for interacting with the server
        * paths - api paths
    * assets (fonts, images, styles)
    * caches - contains auxiliary items for the cache api
    * post-message - contains auxiliary items for the poss message api
    * components
        * app - main component
        * common - common components for the entire application
        * context - for react contexts
        * hoc-helpers - higher-order components for the entire app
        * hook-helpers - reused hooks for the entire app
        * scenes - analog of pages
            ```
                home-scene
                    * components (for this scene)
                        * presentation
                            * index.tss
                            * index.test.tsx
                            * index.stories.tsx
                    * index.tsx
                    * index.test.tsx
                    * index.stories.tsx
                    * index.module.scss
            ```
        * ui - ui components (buttons, textfields etc)
            ```
                buttons
                    * components
                        * button
                            * index.tsx
                            * index.test.tsx
                            * index.stories.tsx
                        * buttonLink
                            * index.tsx
                            * index.test.tsx
                            * index.stories.tsx
                    * model
                        * index.ts
                    * styles
                        * button.module.scss
            ```
        * utilities - specific components (OutsideClick etc)
    * constants - common constant
    * entities - stores entity models and DTO that come from the server
    * helpers - reused functions
    * i18n - setup, translations for internationalization
    * models - various reused interfaces, types
    * modules - stores library abstractions and custom libraries
    * routing
        * model - this file contains the model for routing
        * router - this file responsible for connecting root (page) components
        * routes - this file contains all the application paths
    * services - services for interacting with the server for entities
    * store - contains redux configuration and reducers, actions, selectors, sagas, states separately for each entity and their tests
        ```
            posts
                * action
                    * index.ts
                    * index.test.ts
                * saga
                    * index.ts
                    * index.test.ts
                * reducer
                    * index.ts
                    * index.test.ts
                * selector
                    * index.ts
                    * index.test.ts
                * state
                    * index.ts
        ```
    * toolbox
        * custom-types - own type
        * device - this folder contains info device (platform, type browser and etc)
        * environment - setting up the environment (prod, dev, test)
        * injects - this folder contains decorators to embed the functionality
        * middleware - redux middleware
        * sample - store environment variables
        * tests - auxiliary tools for tests
        * type-definitions - d.ts files
        * utils - auxiliary tool
