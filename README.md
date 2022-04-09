# Project Alpha Admin Console

## Requirements
----

[Yarn](https://yarnpkg.com/) - Package Manager

## Setup and Installation
----

1. Run `yarn`
2. Request an env file from one of the repo admins

## Local Development
----

1. Branch off of the current `sprint` branch with the current ticket number as such: `feature/example-feature/XAC-1`
2. Run `yarn start`
3. A browser window should automatically open up at `localhost:3000` 

## Versions
Node version: 16.6.2

React version: 17.0.2

# Project Tools and Libraries
## State Management
----

Application/Component State - [useContext](https://reactjs.org/docs/context.html)
The state of the application can be easily mananged using a combination of the React Context API, useState, and useReducer hooks. As most of the state needing to be updated will be form data, form validation, and api data fetching, the need for Redux or other more complex state management is not strictly necessary.

## Styling
----

[Material UI v5.0.4](https://mui.com/) - Component Library

[Styled Components v5.3.2](https://styled-components.com/) - Low level styling construct using template literals

[Material UI w/ Styled Components](https://mui.com/guides/interoperability/#styled-components) - Interoperability between MUI and styled-components

[FontAwesome](https://fontawesome.com/) Icons

## IDE Tools
----

[VSCode](https://code.visualstudio.com/) - Opinionated code formatter

[Prettier](https://prettier.io/) - Opinionated code formatter

[styled-components](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components) - Syntax highlighting and IntelliSense for styled-components.

## Folder Structure
```
src/
| ↪ components/ - Application components, styles, pages, layouts, etc (Components should not be nested more than 2 layers)
| ↪ context/    - Context providers to provide application state updates different parts of the application
| ↪ hooks/      - Custom Hooks needed in more than one section of the application 
| ↪ services/   - Reusable utility, formatting, or single use functions
```
----
```
src/
| ↪ components/
| | ↪ UserPage/
| | | ↪ index.ts
| | | ↪ App.tsx
| | | ↪ App.styles.ts
| | ↪ Layout/
| | | ↪ index.ts
| | | ↪ List.tsx
| | | ↪ style.css
| ↪ context/
| | ↪ Session/
| | | ↪ index.ts
| | | ↪ Session.tsx
| ↪ hooks/
| | ↪ useWindowSize/
| | | ↪ index.ts
| | ↪ useData/
| | | ↪ index.ts
| ↪ services/
| | ↪ ErrorTracking/
| | | ↪ index.ts
| | | ↪ test.ts
| | ↪ Format/
| | | ↪ index.ts
| | | ↪ Date/
| | | | ↪ index.ts
| | | | ↪ test.ts
```
# sentiment-playground
